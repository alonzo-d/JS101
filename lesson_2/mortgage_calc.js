/*
This caculator will use information provided by the user
to calculate their monthly mortgage payment
*/
const rlSync = require('readline-sync');

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

function termInputValidator(userInput) {
  return (Number.isNaN(userInput) || userInput === 0);
}

function loanAmount(loanInput) {
  while (loanInputValidator(loanInput)) {
    prompt('There seems to be an error in the amount entered. Please enter a numeric value.');
    loanInput = rlSync.question();
  }

  if (loanInput.includes(',')) {
    loanInput = loanInput.split(',').join('');
  } else if (loanInput[0] === '' || loanInput[0] === '$') {
    loanInput = loanInput.slice(1);
  } else if (loanInput.endsWith('k')) {
    loanInput = loanInput.slice(0, loanInput.length - 1) * 1000;
  }
  return parseInt(loanInput, 10);
}

function aprToMonth(aprInput) {
  let interestRate = '';
  aprInput = parseFloat(aprInput);
  if (aprInput === '0' || Number.isNaN(aprInput)) {
    return 0;
  } else if (aprInput < 1) {
    interestRate = (aprInput / 12).toFixed(2);
  } else if (aprInput > 1) {
    interestRate = ((aprInput * (.01)) / 12).toFixed(2);
  }
  return Number(interestRate);
}

function lengthConversion(lengthInput) {
  lengthInput = parseInt(lengthInput, 10);
  while (termInputValidator(lengthInput)) {
    prompt('There seems to be an error in the months entered. Please enter number of months.');
    lengthInput = rlSync.question();
  }
  return lengthInput;
}

prompt("Mortgage Calculator");
prompt('Enter the loan amount?');
let loan = loanAmount(rlSync.question());

prompt('Enter the APR for this loan?');
let aprOriginal = parseFloat(rlSync.question());
if (aprOriginal < 1) {
  aprOriginal *= 100;
} else if (Number.isNaN(aprOriginal)) {
  aprOriginal = 0;
}
let monthIntRate = aprToMonth(aprOriginal);

prompt('Enter the term length in months?');
let lengthOfLoan = lengthConversion(rlSync.question());

let payment = 0;
if (monthIntRate === 0) {
  payment = (loan / 24);
} else {
/* eslint-disable-next-line max-len */
  payment = loan * (Number(monthIntRate) / (1 - Math.pow((1 + Number(monthIntRate)), (-lengthOfLoan))));
}
console.log(`A $${loan} loan at ${aprOriginal}% for ${lengthOfLoan} months, comes to a monthly payment of ${payment.toFixed(2)}`);