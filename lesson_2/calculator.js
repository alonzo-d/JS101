const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');
const rlSync = require('readline-sync');

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('welcome');

while (true) {
  prompt('firstNumber');
  let num1 = rlSync.question();

  while (invalidNumber(num1)) {
    prompt('invalidNumber');
    num1 = rlSync.question();
  }

  prompt('secondNumber');
  let num2 = rlSync.question();

  while (invalidNumber(num2)) {
    prompt('invalidNumber');
    num2 = rlSync.question();
  }

  prompt('operation');
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOp');
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

  console.log(`The result is ${output}`);
  //prompt(`The result is ${output}`);
  prompt('continueCalc');
  let reply = rlSync.question();

  if (reply[0].toLowerCase() !== 'y') break;
}

prompt('terminate');
