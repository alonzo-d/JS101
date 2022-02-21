// # Calculator #

const MESSAGES = require('./calculator_messages.json');
const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welocome']);

while (true) {
  prompt("What's the first number?");
  let num1 = rlSync.question();

  while (invalidNumber(num1)) {
    prompt('Hmmm...that does not look like a valid number.');
    num1 = rlSync.question();
  }

  prompt("What's the second number?");
  let num2 = rlSync.question();

  while (invalidNumber(num2)) {
    prompt('Hmmm...that does not look like a valid number.');
    num2 = rlSync.question();
  }

  prompt('What operation would you like to perform?\n1) Add  2) Subtract  3) Multiply  4) Divide');
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose either 1, 2, 3, or 4');
    operation = rlSync.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  prompt(`The result is ${output}`);
  prompt('Would you like to make another calculation? y/n');
  let reply = rlSync.question();

  if (reply[0].toLowerCase() !== 'y') break;
}
