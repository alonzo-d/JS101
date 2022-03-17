// function findFibonacciIndexByLength(num) {
//   let numArg = Number(num);
//   fibNum = (fibNum) + (fibNum - 1);

//   // when length of calc number === numArg; return calc num.
// }
// console.log(findFibonacciIndexByLength(2n));

// console.log(findFibonacciIndexByLength(2n)) === 7n;    // 1 1 2 3 5 8 13 // true
// console.log(findFibonacciIndexByLength(3n)) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n)) === 45n; // first number in sequence that contains 10 digits
// console.log(findFibonacciIndexByLength(16n)) === 74n;
// console.log(findFibonacciIndexByLength(100n)) === 476n;
// console.log(findFibonacciIndexByLength(1000n)) === 4782n;
// console.log(findFibonacciIndexByLength(10000n)) === 47847n;
// The last example may take a minute or so to run.


/*(num) lines of strings
each string will have (num) chars, w/ last char '*', rest spaces
input: single integer; outpt: undefined; will log
Rules: (if num is 4, each logged line consists of 4 chars)
  - line one: string that begins w/ 3 spaces and ends w/ one *.
  - line two: string that begins w/ 2 spaces and ends w/ two *.
  - line three: ...
  - line four: string consisting of four chars, all being *.
Data structure:
  - (loop)
algo:
  - create empty space variable
  - create ast variable
  - loop (num) times
  - log string that concatenates:
    - emptyspace repeated (num - 1) w/ (ast + 1)
  - replace last char of string to '*'
  - exit loop and function
*/
// function triangle(num) {
//   let emptySpace = ' ';
//   let asterick = '*';

//   for (let idx = 1; idx <= num; idx += 1) {
//     console.log(emptySpace.repeat(num - idx) + asterick.repeat(idx));
//   }
// }

// console.log(triangle(8));

/*
prompt user for four words
return string w/ words
*/
// let rlSync = require('readline-sync');

// function prompt(msg) {
//   console.log(`=> ${msg}`);
// }

// prompt('Enter a noun');
// let uNoun = rlSync.question();

// prompt('Enter a verb');
// let uVerb = rlSync.question();

// prompt('Enter an adjective');
// let uAdj = rlSync.question();

// prompt('Enter an adverb');
// let uAdv = rlSync.question();

// function madLibs(noun, verb, adj, adverb) {
//   return `The ${adj} ${noun} ${verb} over the ${adverb} dog`;
// }

// console.log(madLibs(uNoun, uVerb, uAdj, uAdv));

/*
if number is a double number, rtn as is
  - else double that number and rtn result

algo:
  - split num
  - if length of unit is odd, rtn as is
  - if double number -
    - first half is identical to second half
*/
// function twice(num) {
//   let result = 0;
//   let numStr = String(num);
//   let lengthOf = numStr.length;
//   let half = (lengthOf / 2);

//   if (lengthOf % 2 === 1) return num * 2;

//   let firstHalf = numStr.substring(0, half);
//   let secondHalf = numStr.substring(half);

//   if (firstHalf === secondHalf) {
//     result = num;
//   } else {
//     result = num * 2;
//   }
//   return result;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

function letterGrade(score) {
  // return letter grade assoc. w/ score
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  }
  return 'F';
}

function getGrade(sc1, sc2, sc3) {
  // returns mean of three
  let meanScore = (sc1 + sc2 + sc3) / 3;
  return letterGrade(meanScore);
}

console.log(
getGrade(95, 90, 93), // 'A'
getGrade(50, 50, 95)  // 'D'
);

// replace passed string containing non-a. chars w/ spaces. if mult. non-a
// exist then replace w/ single space
// function cleanUp(text) {
//   let stringProper = '';
//   let chars = text.split('');

//   for (let idx = 0; idx <= chars.length; idx += 1) {
//     if ( isLowerCase(chars[idx]) || isUpperCase(chars[idx]) ) {
//       stringProper += chars[idx];
//     } else if (stringProper[stringProper.length - 1] !== ' ') {
//       stringProper += ' ';
//     }
//   }
//   return stringProper;
// }

// // two helper functions
// function isLowerCase(char) {
//   return (char >= 'a' && char <= 'z');
// }

// function isUpperCase(char) {
//   return (char >= 'A' && char <= 'Z');
// }
// //console.log(isLowerCase(' '));
// console.log(cleanUp("---what's my +*& line?"));    // " what s my line " //
// // using regexp
// function cleanUpAgain(string) {
//   return string.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
// }

// console.log(cleanUpAgain("---what's my +*& line?"));


// less than or equal to
function century(year) {
  year = Math.ceil(year / 100);
  let yearStr = String(year);
  let lastCharOfCent = yearStr.substring(yearStr.length - 1);
  //console.log(lastCharOfCent);
  let first = 'st';
  let second = 'nd';
  let third = 'rd';
  let fourth = 'th';

  if (Number(lastCharOfCent) <= 9 && Number(lastCharOfCent) >= 4) {
    yearStr += fourth;
  } else if (lastCharOfCent === '1') {
    yearStr += first;
  } else if (lastCharOfCent === '2') {
    yearStr += second;
  } else if (lastCharOfCent === '3') {
    yearStr += third;
  }
  return yearStr;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"