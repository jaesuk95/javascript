let age = 15;
let isSwitchedOn = true;
let top5Cryptos = ['BTC', 'ETH', 'USDT', 'ADA', 'DOT'];     // array
let transaction = {                                         // objects
    currency: top5Cryptos[1],
    amount: 10000000
}

console.log(age)
console.log(isSwitchedOn)
console.log(transaction.amount)

console.log(transaction)

age = age + 6;
isSwitchedOn = !isSwitchedOn;
let currentAmount = transaction.amount;
transaction.amount *= 2;                    // multiply by 2 

console.log(age)
console.log(isSwitchedOn)
console.log(currentAmount)
console.log(transaction.amount)

let clone = [...top5Cryptos];         // cloning, you are cloning an array because to maintain original array lists 
clone.push('DODGE')                   // you are adding a new list in array

console.log(clone)

clone[1] = 'AVAX';        // removes ETH out of the array and AVAX is substituted in
console.log(clone)

console.log(top5Cryptos)    // beccause you used the cloning effect, the original array list is untouched




// // var newCheatCode = cryptos.slice(2);       // slices front index according to slice input value
// var exampleOfSlice = cryptos.slice(1,4);       // slices front index according to slice input value
// // console.log(newCheatCode)
// console.log(exampleOfSlice)

// let clone = [...cryptos, ...cryptos, ...cryptos]
// console.log(clone)


// new 

let transaction2 = [
    {
        currency: "ETH",
        amount: 0.1
    },
    {
        currency: "BTC",
        amount: 0.2
    }
];

// let clonedTransactions = [...transaction2]   // this method does not fully clone the objects. It only duplicate the array, however those two arrays are pointing at 
                                                // exact same object in object fields. So therefore results will be the same 
let clonedTransactions = JSON.parse(JSON.stringify(transaction2))   // this method duplicates the whole section, including array and object field
clonedTransactions[1].amount += 0.1;

console.log(transaction2);
console.log(clonedTransactions);