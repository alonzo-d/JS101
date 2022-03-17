//1. Given a string, return a new string that replaces every occurrence
// of the word "important" with "urgent":
// eslint-disable-next-line max-len
// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// console.log(advice.replaceAll('important', 'urgent'));

//2.
//let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// reverse and sort without mutating original array using .slice and .reverse
// let slicedArr = [];
// slicedArr = numbers.slice(0).reverse();
// console.log(slicedArr);
// reverse and sort w/o mutating original array using spread syntax and .sort
//console.log(numbers.sort((num1, num2) => num2 - num1));
//console.log(numbers); // edited original array
//console.log([...numbers].sort((num1, num2) => num2 - num1));
//console.log(numbers);

// let newNumbers = numbers;
// console.log(newNumbers.sort((num1, num2) => num2 - num1));

//use .foreach
// let numbers = [1, 2, 3, 4, 5,];
// let resultArr = [];
// numbers.forEach((num) => {
//   resultArr.unshift(num);
// });
// console.log(resultArr);

//3.
// given two args: array and number, determine whether array contains number
// function isNumInArr(arr, num) {
//   return arr.includes(num);
//   // use .indexOf()
//   //return (arr.indexOf(num) > -1) ? 'true' : 'false';
// }

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;
// console.log(isNumInArr(numbers, number1)); // false
// let number2 = 95;
// console.log(isNumInArr(numbers, number2)); // true

//4.
// show two diff. ways of displaying 'Four score and' in front of passed string
// let famousWords = "seven years ago...";

// function preFix(string) {
//   let wordsToAdd = 'Four score and ';
//   // concat strings
//   //return wordsToAdd.concat(famousWords);

//   // .push
//   let wordsInArr = ['Four score and '];
//   wordsInArr.push(famousWords);
//   return wordsInArr.join('');
// }

// console.log(preFix(famousWords));

//5.
// mutate array by removing second index
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);

//6.
// convert the following nested array:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// to single array
// let originalArr =
//["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let editedArr = originalArr.slice(0, 2);
// // using spread syntax
// let resultArr = [...editedArr, ...originalArr[2], ...originalArr[3]];
// console.log(resultArr);

// // using .concat
//let originalArr =
//["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//originalArr = [].concat(...originalArr);
//console.log(originalArr);

// using .reduce
// originalArr = originalArr.reduce((accum, elem) => {
//   return accum.concat(elem);
// }, []);
// console.log(originalArr);

// let flintstones =
//["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);
// console.log(flintstones);

//let flintstones=["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let newFlint = [];
// flintstones.forEach(elem => {
//   newFlint = newFlint.concat(elem);
// });
// console.log(newFlint);
// or .flat
// flintstones = flintstones.flat();
// console.log(flintstones);

//7.
// return an array w/ only 2 elements: Barney, and his number (3)
// eslint-disable-next-line max-len
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// console.log(Object.entries(flintstones)[2]);

//8.
// let numbers = [1, 2, 3, 4];
// console.log(Array.isArray(numbers)); // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
// console.log(Array.isArray(table)); // false

//9.
// let title = "Flintstone Family Members";
// // console.log(title.padStart(Math.floor(40), ' '));

// let padding = Math.floor((40 - title.length) / 2);
// console.log(title.padStart(padding + title.length));

//10.
// write two one line expressions to count numbers of "t's" in each statement
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// const numOf = (string) => string.split('').filter(ele => (ele === 't') ).length;

// console.log(numOf(statement1));
// console.log(numOf(statement2));

/*
l3ppe2
*/
/*
q1.
Write three different ways to remove all of the
elements from the following array:
*/
// let numbers = [1, 2, 3, 4];

// while (numbers.length) {
//   numbers.shift();
// }

// while (numbers.length) {
//   numbers.pop();
// }

//console.log(numbers);

// let resultArr = numbers.filter(ele => (ele > 5));
// console.log(resultArr);

// let result = numbers.splice(0, 0); // ?????????????????????????
// console.log(result);

//q2.
//console.log([1, 2, 3] + [4, 5]); // [, 2, 34, 5]

//q5.
/*
Can you rewrite this function so it only has one return
statement and does not explicitly use either true or false?
*/
// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return (color === 'blue' || color === 'green');
// }

const isColorValid = color => ['blue', 'green'].includes(color);

console.log(isColorValid('blue')); // true