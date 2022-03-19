// VARIABLES

console.log(0.1+0.2);
// this 0.1 + 0.2 gives result of 0.30000000000000004
//  note that the 4 is added
console.log(5+2)*4;
console.log(5%2);   // calculates the remaining
console.log(4%2);   // calculates the remaining
console.log(2**8);   // 2*2*2*2*2*2*2*2


console.log('this is string');  
console.log('array'[1]);    // result = r
console.log('array'[3]);   // result = a


console.log('ab' + 'cd');   // result = abcd

// document.body.innerHTML = '<h1>Hello, Moralis<h1>';

console.log(true);
console.log(!true);

console.log(5%2 === 1);     // true because mathematically true (boolean term)
console.log(5%2 === '1');   // false because it is represented in string (boolean term)
console.log(5%2 == '1');   // false because it is represented in string

var btcBalance = 0;         // variable
const gravity = 9.81;    // const does not make because it means you need to add initial value into this btcBalance2 
                            // and you won't be able to change the value inside because it is constant, it will never change 
let btcBalance3 = 0.9;      // 'let' was introduced in late 2015, let will work almost with everything, just use let

console.log(btcBalance);
console.log(btcBalance3);

// Left value = right vlaue btcBalance : what is the current value of the value 
// Left value is the destination value 
btcBalance3 = btcBalance3 + 0.1;
btcBalance3 = btcBalance3 + 0.1;
console.log(btcBalance3);
// https://pythontutor.com/visualize.html#mode=edit     go to this website and you send see how code works in each steps 

let originalBalance = 0;

let secondBalance = originalBalance + 0.1;
let finalBalance = secondBalance + 0.2;
console.log(finalBalance);

let userName = 'jaesuk';
console.log(userName);
console.log(userName[1]);


let greeting = 'hello this is greeting message';
let target = 'Moralis';

let message = `${greeting}, ${target}!`;
console.log(message);

greeting = null;
target = null;
// even though the string values are set to null, the message still holds because it is saved under 'message' string value 
console.log(message);



