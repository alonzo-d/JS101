const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Please enter your first number.');
let num1 = parseInt(rlSync.question(), 10);

prompt('Please enter your second number.');
let num2 = parseInt(rlSync.question(), 10);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
