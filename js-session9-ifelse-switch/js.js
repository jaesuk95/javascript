// if(condition){
//     statement1;
//     statement2;
// } else if (secondCondition){
//     statements;
// } else {
//     statement;
// }

// if function 
const number = 2;
if (number % 2 === 1) {
    console.log("odd number")
    // } else if (number.isNaN(number)){        // isNaN only works in chrome, or other internet, but not here in js or node
    //     console.log("not a number")
} else if (number === 0) {
    console.log("value is zero")
} else {
    console.log("even number")
}
let testing = number % 2 === 1;         // is the remainder 1? 
console.log(number)
console.log(testing)

// switch function 
switch(number){
    case 1: console.log("first case"); 
        break;
    case 2: console.log("second case"); 
        break;
    default: console.log("try again within range");
        break;
}

if (number === 1) {
    console.log("first case under if statement")
} else if (number === 2) {
    console.log("second case under if statement")
} else {
    console.log("try again within range - if statement")
}
