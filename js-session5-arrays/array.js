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

    // carried on from here ------------------------------------------------
    let cheatCode = [19,65,9,17];       // builds an array 
    cheatCode   // enter this command on chrome console
        (4) [19, 65, 9, 17]
        0: 19
        1: 65
        2: 9
        3: 17
        length: 4
        [[Prototype]]: Array(0)

cheatCode[1]    // result = 65
cheatCode.at(1) // result = 65
cheatCode.toString()    // result = '19,65,9,17'
cheatCode.join(',');    // '19,65,9,17'
*/
