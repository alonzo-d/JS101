//q3. ??????????????????????????????????????????????
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(-9));

///////////////////

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };

//   let arrayOfDigits = string.split("");
//   const modArr = arrayOfDigits.map(char => DIGITS[char]);
//   console.log(modArr);
//   let value = 0;
//   modArr.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-':
//       return -stringToInteger(string.slice(1, string.length));
//     case '+':
//       return stringToInteger(string.slice(1, string.length));
//     default:
//       return stringToInteger(string);
//   }
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(integer) {
//   let stringResult = '';

//   do {
//     let remainder = integer % 10;
//     integer = Math.floor(integer / 10);
//     stringResult = DIGITS[remainder] + stringResult;
//   } while (integer > 0);
//   return stringResult;
// }

// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// console.log(signedIntegerToString(4321));
// console.log(signedIntegerToString(-123));

// console.log(signedIntegerToString(4321) === "+4321");
//console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

///////////////////////////////
/*
When you pass primitive values to functions,
you can treat JavaScript like pass-by-value.
No operation performed on a primitive value can
permanently alter the value. In other words,
when you pass a primitive value to a function,
you won't be able to affect the value of the
argument passed to the function.
*/
// function messWithVars(one, two, three) {
//   one = two; // one is now ['two'] = ['three'] = ['one']
//   two = three; // one is now ['3'] = ['one']
//   three = one; // three is now ['2']
//   console.log(one);
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);
// console.log(one);

//console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// "one is: one"
// "two is: two"
// "three is: three"

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
//   //console.log();
// }

// let one = 'one'; //["one"];
// let two = 'two'; //["two"];
// let three = 'three'; //["three"];

// //one = ['10'];
// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// // // "one is: one"
// // // "two is: two"
// // // "three is: three"

// function messWithVars3(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

//messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// // "one is: two"
// // "two is: three"
// // "three is: one"

// function capitalize(names) {
//   return names.map(name => name[0].toUpperCase() + name.slice(1));
// }

// let names = ["chris", "kevin", "naveed"];
// capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
// console.log(names); // => ['chris', 'kevin', 'naveed']

// capitalize()

// let names = ["chris", "kevin", "naveed"];
// names = capitalize(names); // returns ['Chris', 'Kevin', 'Naveed'];
// let names = 'tom';
// function printName(names) {
//   names = 'victor';
//   return names;
// }
// console.log(printName(names)); // returns 'victor'
// console.log(names); // => returns 'tom'

// function printNameAgain() {
//   names = 'victor';
//   return names;
// }
// console.log(printNameAgain()); // returns 'victor'
// console.log(names); // => returns 'victor'
/*
what confused me was the distinction between passing
a value(x) and not passing a value(), and the difference it produces.
Pertaining to the two functions above, and with all else being equal:

first function is PASSED the names variable.
- it then makes a COPY of the names value
- it then re-assigns and returns the names variable
* example of pass-by-value
* outer scope not affected
* Though technically this is not a case of variable 'shadowing',
  the outcome will be similar to 'variable shadowing', since in
  this case both parameter and variable have the same name.

  second function is not passed anything.
- it then re-assigns and returns the names variable
* the outer scope variable is affected
*/

// function decodedValue(transistorArray){
// let colorsArray = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

//   let colorsObject = {
//     'black': 0,
//     'brown': 1,
//     'red': 2,
//     'orange': 3,
//     'yellow': 4,
//     'green': 5,
//     'blue': 6,
//     'violet': 7,
//     'grey': 8,
//     'white': 9
//   }

//   // let colorOne = transistorArray[0];
//   // let colorTwo = transistorArray[1];

//   let returnValue = '';

// // Array Version
// console.log(`Before Adding: ${returnValue}`)

// Take the exisitng return value and reassign it to the current value of the returnValue plus the index form color one
// returnValue = returnValue + String(colorsArray.indexOf(colorOne)); 
// console.log(`After Adding First Color: ${returnValue}`)

// // Take the existing return value and reassign plus the second index 
// returnValue = returnValue + String(colorsArray.indexOf(colorTwo)); 
// console.log(`After Adding Second Color: ${returnValue}`)
// Object Version
// For-Each Loop to iterate over the keys in the transistorArray
// Grabbing the relevant value

// For each of the elements in the transistorArray 
//   for (let count = 0; count < 2; count++){
//     // Do What I Tell You Here
//     returnValue = returnValue + String(colorsObject[transistorArray[count]]);
//   }

//   return Number(returnValue);
// }

// // console.log(decodedValue(["brown", "black"])) // 10
// // console.log(decodedValue(["blue", "grey"])); // 68
// // console.log(decodedValue(["yellow", "violet"])); // 47
// // console.log(decodedValue(["orange", "orange"])); // 33
// console.log(decodedValue(["green", "brown", "orange"])); // 51


