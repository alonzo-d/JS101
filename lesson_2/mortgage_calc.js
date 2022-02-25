/*
This caculator will use information provided by the user
to calculate their monthly mortgage payment
*/
const rlSync = require('readline-sync');
let
  payment = 0,
  aInterestRate = 0,
  mInterestRate = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function principleValidator(loanAmount) {
  // validates for non-strings
  if (loanAmount.includes(',')) {
    return false;
  } else {
    return Number.isNaN(Number(loanAmount));
  }
}

prompt("Let's get started");
prompt('How much is your loan amount?');
let loanInput = rlSync.question();

while (principleValidator(loanInput)) {
  prompt('There seems to be an error in the amount entered. Please enter a numeric value.');
  loanInput = rlSync.question();
}

if (loanInput.includes(',')) {
  loanInput = loanInput.split(',').join('');
}
let loan = parseInt(loanInput, 10);

prompt('What is the APR for this loan?');
let aPR = parseFloat(rlSync.question()).toFixed(1);

if (Number(aPR) < 1) {
  aInterestRate = Number(aPR);
} else if (Number(aPR) > 1) {
  aInterestRate = Number(aPR) * (.01);
} else if (aPR === '0' || aPR === '') {
  mInterestRate = 0;
}

let aToM = (aInterestRate / 12).toFixed(2);
mInterestRate = Number(aToM);

prompt('How many months is the loan term for?');
let loanTerm = parseInt(rlSync.question(), 10);

if (mInterestRate === 0) {
  payment = (loan / 24);
} else {
/* eslint-disable-next-line max-len */
  payment = loan * (mInterestRate / (1 - Math.pow((1 + mInterestRate), (-loanTerm))));
}

console.log(`$${loan} at ${aPR}% for ${loanTerm} months, comes to monthly payment of ${payment.toFixed(2)}`);