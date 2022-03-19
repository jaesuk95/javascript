// function is one of the most important 
// function help you repeat more complex operation 
// for example if you want to create transaction
// you can think function as a vending machine, you insert a coin and then you get the snack you want

function createTransaction(amount, ticker){
    const transaction = {};     // creating the transaction (object) the transaction is constant because it always holds 'amount' and 'ticker'
    transaction.amount = amount;
    transaction.ticker = ticker;
    return transaction;
}

// createTransaction('ETH', 2e18) applies the function

const newTransaction = createTransaction(3e18, 'ETH');  // 2 * to the power of 18 (18 zeros added)
console.log(newTransaction);

const pi = 3.14;
// pi = 5; // does not work because pi is constant

console.log(newTransaction.amount / 2);     // divides the value by 2


function sum(a,b){
    return a + b;
}

let value = sum(5, sum(5,5));
console.log(value);



const product = function(a,b){
    return a*b;
}
// or 
const prod = (a,b) => a*b;      // this is the same as above product function
let v1 = product(6,7)
let v2 = prod(5,7)
console.log(v1)
console.log(v2)

const sum2 = (a,b) => a + b;        // => arrow function is the same as return
let v3 = sum2(5,2)
console.log(v3)

const sumC = a => (b => a + b);
//      b => a + b
let v4 = sumC(5)(5)
console.log(v4)



function calculateVelocity( v0, acc, time){     // V = v0 + at
    return v0 + acc * time + " m/s";
}
let v5 = calculateVelocity(10,5,8)
console.log(v5)
// another method instead of using function
const calculateVelocity2 = (v0, acc, time) => v0 + acc * time + " m/s";
let v6 = calculateVelocity2(10,3,5)
console.log(v6)