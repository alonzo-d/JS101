/*
This caculator will use information provided by the user
to calculate their monthly mortgage payment
*/
const rlSync = require('readline-sync');
let
  payment = 0,
  monthlyRate;

function prompt(message) {
  console.log(`=> ${message}`);
}

function loanInputValidator(userInput) {
  if (userInput.includes(',')) {
    return false;
  } else if (userInput.includes('k')) {
    return false;
  } else {
    return Number.isNaN(Number(userInput));
  }
}

prompt("Mortgage Calculator");
prompt('Enter the loan amount?');
let loanInput = loanAmount(rlSync.question());

function loanAmount(userInput) {
  while (loanInputValidator(userInput)) {
    prompt('There seems to be an error in the amount entered. Please enter a numeric value.');
    userInput = rlSync.question();
  }

  if (userInput.includes(',')) {
    userInput = userInput.split(',').join('');
  } else if (userInput[0] === '' || userInput[0] === '$') {
    userInput = userInput.slice(1);
  } else if (userInput.endsWith('k')) {
    userInput = userInput.slice(0, userInput.length - 1) * 1000;
  }
  return userInput;
}
let loan = parseInt(loanInput, 10);

prompt('Enter the APR for this loan?');
let aPR = parseFloat(rlSync.question()).toFixed(1);
if (Number(aPR) < 1) {
  monthlyRate = (Number(aPR) / 12).toFixed(2);
} else if (Number(aPR) > 1) {
  monthlyRate = ((Number(aPR) * (.01)) / 12).toFixed(2);
} else if (aPR === '0' || aPR === '') {
  monthlyRate = 0;
}

prompt('Enter the term length in months?');
let loanTerm = parseInt(rlSync.question(), 10);
if (monthlyRate === 0) {
  payment = (loan / 24);
} else {
/* eslint-disable-next-line max-len */
  payment = loan * (Number(monthlyRate) / (1 - Math.pow((1 + Number(monthlyRate)), (-loanTerm))));
}
console.log(`A $${loan} loan at ${aPR}% for ${loanTerm} months, comes to a monthly payment of ${payment.toFixed(2)}`);