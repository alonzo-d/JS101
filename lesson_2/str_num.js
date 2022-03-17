// @ts-nocheck
/*eslint max-lines-per-function: ["error", 35]*/
// IMPORTANT *****
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let arrayOfDigits = string.split("");
  const modArr = arrayOfDigits.map(char => DIGITS[char]);
  console.log(modArr);
  let value = 0;
  modArr.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let stringResult = '';

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);
    stringResult = DIGITS[remainder] + stringResult;
  } while (integer > 0);
  return stringResult;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));

console.log(signedIntegerToString(4321) === "+4321");
//console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");