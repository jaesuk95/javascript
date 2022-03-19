// let API_URL = 'https://api.coinpaprika.com/v1/coins';    // rank system got messed up
// https://docs.coincap.io/


// async function getTopTokens(){
//     const response = await fetch(API_URL);
//     const tokens = await response.json();

//     // token rank range 1 - 10  (the rank has to be atleast 1 because there are many rank 0 tokens)
//     return tokens
//             // .filter(token => token.rank >= 1 && token.rank <= 10)
//             // .map(token => token.symbol);
// } 

// getTopTokens().then(console.log)



let API_URL = 'https://api.coincap.io/v2/assets';
async function getTopTokens(){
    const response = await fetch(API_URL);
    const tokens = await response.json();
    console.log(tokens)
    // object value is deployed because the data we want to get is capsulated (diving into a specific capulated format data)
    let tokenList = Object.values(tokens.data);  
    console.log(tokenList)
    let listItems = tokenList
        .filter(token => token.rank >= 1 && token.rank <= 10)
        .map(token => token.symbol);
    
    // console.log(listItems)
    return listItems
} 

getTopTokens().then(console.log)

async function getTickerData(tickerList){
    const response = await fetch('https://api.1inch.exchange/v3.0/1/tokens');
    const tokens = await response.json();
    const tokenList = Object.values(tokens.tokens);
    return tokenList.filter(token => tickerList.includes(token.symbol));
}

getTopTokens()
    .then(getTickerData)
    .then(console.log)



/*
https://api.1inch.exchange/v4.0/1/tokens    latesting version
https://api.1inch.exchange/v4.0/56/tokens   binance token network
https://api.1inch.exchange/v4.0/137/tokens   polygon token network

you only get results that are linked from https://docs.1inch.io/docs/aggregation-protocol/api/swagger swagger
so in other word, only works with ERC-20 tokens
result section

0: {symbol: 'USDC', name: 'USD Coin', address: 
1: {symbol: 'USDT', name: 'Tether USD', address: 
2: {symbol: 'ETH', name: 'Ethereum', decimals: 18, address: 
3: {symbol: 'LUNA'
*/