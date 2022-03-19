// immuteability = you are not ment to mutate or change the value of variables because whever you transform a value you should save it in a new variable

/*
const ticker = prompt('Enter your crypto ticker');
const amount = +prompt("Enter the amount you bought: ");

console.log(`you have just bought ${amount}${ticker}`);

const purchase = {
    ticker: ticker,
    amount: amount
};

purchase                // result {ticker: 'BTC', amount: 1.015}
                        amount: 1.015
                        ticker: "BTC"

purchase.amount         // result: 1.015

purchase['ticker']      // 'BTC'

let key = 'ticker';
purchase[key]           // 'BTC'

purchase.owner = {
    name: 'jae',
    accountNumber: '123'
};

purchase
    {ticker: 'BTC', amount: 1.015, owner: {…}}
    amount: 1.015
    owner: {name: 'jae', accountNumber: '123'}          // you can see here, a new array has been added under purchase array
    ticker: "BTC"
    [[Prototype]]: Object
*/

const purchase = {
    ticker: ticker,
    amount: amount
};