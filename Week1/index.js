console.log("This is my first program");
console.log("welcome Josh your month salary is 50000");
const num1 = 5;
const num2 = 3;
const sum = num1 + num2; 
console.log("The sum of 'num1' and 'num2' is " + sum);
const prompt = require('prompt-sync')();
console.log("starling");
const name = prompt("Enter your name: ");
console.log(`Hello, ${name}`); 
const number = parseInt(prompt("Enter a number"));
if (number > 0) {
    console.log("The number is positive");
} else if (number === 0) { 
    console.log("The number is Zero");
} else {
    console.log("The number is negative");
}