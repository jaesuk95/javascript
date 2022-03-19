const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'XRP'];

// console.log(cryptos[0]);
// console.log(cryptos[1]);
// console.log(cryptos[2]);
// console.log(cryptos[3]);
// console.log(cryptos[4]);

// for of loop  , for loop gives you the values
for (let token of cryptos){
    console.log(token)
}

console.log("------------1")

// for in loop  ,   for in loop gives you indexes
for (let index in cryptos){     
    console.log(cryptos[index], index, typeof index)      // crypto[index] gives you name of objects, index gives you number values in string format
}

console.log("------------2")

for (let i = 0; i < cryptos.length; i += 1){    // i++ works aswell
    console.log(cryptos[i])
}

console.log("------------3")

let i = 0;
while(i<cryptos.length){
    console.log(cryptos[i]);
    i += 1;     // don't forget this part, or else you are running forever 
}


let value = 0.1;

do {
    // value = prompt('Enter a positive number: ');     // prompt not working in node or javascript
    let value = 5;
} while(!(value > 0));       // it cant be less than zero, it cant be zero, it cant be null, or it cant be undefined,, if the value is unsatisfied repeat the loop
console.log(value)

while(!(value > 0)); {
    // value = prompt('Enter a positive number: ');     // prompt not working in node or javascript
}
console.log(value)

console.log("------------4")

cryptos.forEach(function(crypto){
    console.log(crypto);
});