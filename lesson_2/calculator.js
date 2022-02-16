// ask the user for the first num
// ask the user for the sec num
// ask the user for an oper. to perform
// perform said oper. on the two nums
// print result to terminal

const rlSync = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What"s the first number?');
let num1 = rlSync.question();

console.log('Waht"s the second number?');
let num2 = rlSync.question();

console.log('What operation would you like to perform?\n1) Add  2) Subtract  3) Multiply  4) Divide');
let operation = rlSync.question();

let output;
if (operation === '1') {
	output = Number(num1) + Number(num2);
} else if (operation === '2') {
	output = Number(num1) - Number(num2);
} else if (operation === '3') {
	output = Number(num1) * Number(num2);
} else {
	output = Number(num1) / Number(num2);
}


console.log(`The result is ${output}`);







