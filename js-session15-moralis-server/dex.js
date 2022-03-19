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
const $selectedToken = document.querySelector('.js-from-token');    // refer as selected token
const $amountInput = document.querySelector('.js-from-amount');

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

// swap function
async function initSwapForm(event){
    event.preventDefault();             // preventDefault() method cancels the event if it is cancelable, ability to prevent a browser’s default behavior for events.
    // // e.target은 사용자가 클릭한 <li> 요소를 가리킴
    $selectedToken.innerText = event.target.dataset.symbol;     // target is the button which we clicked on, and the button has data (symbol)
    // we will then need to send address and decimals once we submit swap itself
    // target은 이벤트가 일어날 객체를 의미한다. 예를 들어 버튼을 누르면 새로운 창이 열리는 객체가 있다고 하자. 그렇다면 여기서 버튼은 event target이 된다.
    // e.target 을 통해 현재 이벤트 일어난 요소를 가져오고, 그 요소의 data-address 로 저장한 데이터 값은 data 속성에 접근하는 속성인 'dataset' 과 data-뒤에 저장한 이름을 매치시켜부른다 
    $selectedToken.dataset.address = event.target.dataset.address;
    $selectedToken.dataset.decimals = event.target.dataset.decimals;
    $selectedToken.dataset.max = event.target.dataset.max;
    $amountInput.removeAttribute('disabled');   // this enabled input values 
    $amountInput.value =''; // clear the value because it can happen it is already enabled 
    document.querySelector('.js-submit').removeAttribute('disabled');
    document.querySelector('.js-cancel').removeAttribute('disabled');   
    document.querySelector('.js-quote-container').innerHTML = '';           // generate a result automatically 
}

// because we want to use await function that is why we are using async function
async function getStats() {
    const balances = await Moralis.Web3API.account.getTokenBalances({ chain: 'polygon' });    // chain = the blockchain to get data from
    console.log(balances);  // provides what coins you hold
    $tokenBalanceTBody.innerHTML = balances.map((token, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${token.symbol}</td>
            <td>${tokenValue(token.balance, token.decimals)}</td>
            <td>
                <button class="js-swap"
                    data-address="${token.token_address}"
                    data-symbol="${token.symbol}"
                    data-decimals="${token.decimals}"
                    data-max="${tokenValue(token.balance, token.decimals)}">
                    Swap
                </button>
            </td>
        </tr>
    `).join('');

    // to make sure all the clicks are listened, create a for loop
    // for each buttons(class named .js-swap) that have tokenBalanceTBody
    for(let $btn of $tokenBalanceTBody.querySelectorAll('.js-swap')){
        $btn.addEventListener('click', initSwapForm);
    }
}

// buying crypto function by using moralis -> onRamp (https://moralis.io/plugins/fiat/)
async function buyCrypto() {
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