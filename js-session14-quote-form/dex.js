let API_URL = 'https://api.coincap.io/v2/assets';

async function getTopTokens(){
    const response = await fetch(API_URL);
    const tokens = await response.json();   
    console.log(tokens)
    // object value is deployed because the data we want to get is capsulated (gateway : data)
    let tokenList = Object.values(tokens.data);  
    let listItems = tokenList
        .filter(token => token.rank >= 1 && token.rank <= 50)   // you can name anything under 'token' it does not have to be named that way
        .map(token => token.symbol);
    console.log(listItems)
    return listItems
} 
// getTopTokens().then(console.log)

async function getTickerData(tickerList){   // the tickerList is transferred from getTopTokens result to getTickerData
    const response = await fetch('https://api.1inch.exchange/v3.0/56/tokens');      // using binance smart chain network 
    const tokens = await response.json();
    const tokenList = Object.values(tokens.tokens);
    let chainNetwork = tokenList.filter(token => tickerList.includes(token.symbol));    // tickers that contain a specific value
    console.log(chainNetwork)
    return chainNetwork  // compares https://api.coincap.io/v2/assets to https://api.1inch.exchange/v3.0/56/tokens
}

function renderForm(tokens){
    const options = tokens.map(token => 
        // the option value is token address
        `<option value="${token.decimals}-${token.address}">${token.name} (${token.symbol})</option>`);
    console.log(tokens)
    console.log(options.join(''))
    document.querySelector('[name=from-token]').innerHTML = options;
    document.querySelector('[name=to-token]').innerHTML = options;
    document.querySelector('js-submit-quote').removeAttribute('disabled');      // as soon as the page loads up, you are able to click 
}


async function formSubmitted(event) {
    event.preventDefault();
    const fromToken = document.querySelector('[name=from-token]').value;    // result = 18-0xeeeeeeee...
    const toToken = document.querySelector('[name=to-token]').value;        // result = 18-0xeeeeeeee...  // the idea is you are splitting from id to address
    // why do you need to split or arrange decimal in the first place?
    // because it is easier and clear for developers to sort decimals

    console.log(fromToken);

    const [fromDecimals, fromAddress] = fromToken.split('-');
    const [toDecimals, toAddress] = toToken.split('-');
    const fromUnit = 10 ** fromDecimals;    // this will create from 1 to 18 decimal points 

    const decimalRatio = 10 ** (fromDecimals - toDecimals);

    /*
    1 Doge (8 decimal) = 100000000
    1 USDT (18 decimal) = 10000000000000000
    */

    const url = `https://api.1inch.exchange/v3.0/56/quote?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${fromUnit}`;
    console.log(url);
    console.log(fromAddress);
    console.log(toAddress)

    try {
        const response = await fetch(url)
        const quote = await response.json();
        const exchange_rate = Number(quote.toTokenAmount) / Number(quote.fromTokenAmount) * decimalRatio;          // divide the values 
        document.querySelector('.js-quote-container').innerHTML = `
            <h2>1 ${quote.fromToken.symbol} = ${exchange_rate} ${quote.toToken.symbol}</h2>
            <p>Gas fee: ${quote.estimatedGas}</p>
        `;
    } catch (error) {
        document.querySelector('.js-quote-container').innerHTML = `<h3>The conversion did not succeed</h3>`;
    }

}

// what is decimal in ERC-20?
// ETH itself has 18 decimals and ERC-20 tokens simply follow that standard. 
// 1 ETH is represented by 10^18 of it natural unit (1 ETH = 1,000,000,000,000,000,000 wei)
// Token decimal actually means that the currency is divided into smaller units. In other words it is just the fraction of the token.


document.querySelector('.js-submit-quote').addEventListener('click', formSubmitted);

getTopTokens()              // gets the top 10 lists of coins from api.coincap website
    .then(getTickerData)    // the top 10 lists are passed into this section and 
    .then(renderForm)