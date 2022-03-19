// building a moralis server because this will allow alot of tasks that are alot easier for you 
// to handle crypto transaction and convert units 
// for example if you want to buy 1.5 ETH instead of writing 1500000000000 wei (18 decimals)
// moralis helps you with conversion and buy/selling cryptos and also exchanging cryptos 

// https://docs.moralis.io/moralis-server/web3-sdk/account

// connect to Moralis server
const serverUrl = "https://he1dnxwzzthg.usemoralis.com:2053/server";
const appId = "lveyyGYcXiYZPWnCeu8JpY9TacSMGZHQFBdnkQAl";

Moralis.start({ serverUrl, appId });

Moralis.initPlugins().then(() => console.log("plugins have been initialised"));  // buy crypto

const $tokenBalanceTBody = document.querySelector('.js-token-balances');


//Convert token value to ETH style with 18 decimals
//If you do not specify decimals, 18 decimals will be automatically used
// const tokenValue = Moralis.Units.FromWei("2000000000000000000")

// Converting from Wei using custom function
const tokenValue = (value, decimals) =>
    (decimals ? value / Math.pow(10, decimals) : value);


// add from here down (How to Login with MetaMask)
async function login() {
    let user = Moralis.User.current();  // gets the current user
    if (!user) {    // if the user does not exist 
        user = await Moralis.authenticate();    // we ask moralis to hold authentication
    }
    console.log("logged in user:", user);
    getStats();
}

// because we want to use await function that is why we are using async function
async function getStats(){
    const balances = await Moralis.Web3API.account.getTokenBalances({chain: 'polygon'});    // chain = the blockchain to get data from
    console.log(balances);
    $tokenBalanceTBody.innerHTML = balances.map((token, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${token.symbol}</td>
            <td>${tokenValue(token.balance, token.decimals)}</td>
            <td>button</td>
        </tr>
    `).join('');
}

// buying crypto function by using moralis -> onRamp (https://moralis.io/plugins/fiat/)
async function buyCrypto(){
    Moralis.Plugins.fiat.buy();
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

// Using querySelector you can select anything, like elements by name, 
// elements with class name and elements with ids. In above getElementById is specifically used for selecting element by ID.
document.querySelector("#btn-login").addEventListener('click', login);
document.querySelector("#btn-buy-crypto").addEventListener('click', buyCrypto)  // buy crypto (click listener)
document.getElementById("btn-logout").addEventListener('click', logOut);

// get top rank coins
let API_URL = 'https://api.coincap.io/v2/assets';
async function getTopTokens() {
    const response = await fetch(API_URL);
    const tokens = await response.json();
    console.log(tokens)
    let tokenList = Object.values(tokens.data);
    let listItems = tokenList
        .filter(token => token.rank >= 1 && token.rank <= 50)
        .map(token => token.symbol);
    console.log(listItems)
    return listItems
}

async function getTickerData(tickerList) {   // the tickerList is transferred from getTopTokens result to getTickerData
    const response = await fetch('https://api.1inch.exchange/v3.0/137/tokens');      // using binance smart chain network 
    const tokens = await response.json();
    const tokenList = Object.values(tokens.tokens);
    let chainNetwork = tokenList.filter(token => tickerList.includes(token.symbol));    // tickers that contain a specific value
    return chainNetwork  // compares https://api.coincap.io/v2/assets to https://api.1inch.exchange/v3.0/56/tokens
}

getTopTokens()              // gets the top 10 lists of coins from api.coincap website
    .then(getTickerData)    // the top 10 lists are passed into this section and 
    .then(console.log)