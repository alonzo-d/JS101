/* L5 Practice Problems */
//1. order numeric strings by descending value
// let arr = ['10', '11', '9', '7', '8'];
// let newArr = arr.sort((a, b) => Number(b) - Number(a));
// console.log(newArr);

//2. order objects based on earliest year of publication
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// books.sort((a, b) => Number(a.published) - Number(b.published));
// console.log(books);

//3. access the letter 'g' in each collection
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// //console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// //console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// //console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// //console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// //console.log(Object.keys(obj2.third)[0]);

//4. transform the value '3' to '4' in each object
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// //console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// //console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// //console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
//console.log(obj2);

//5. return total sum of ages from males
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let munstersArr = Object.values(munsters);
// let ageTotal = 0;
// munstersArr.forEach(ele => {
//   if (ele.gender === 'male') {
//     ageTotal += ele.age;
//   }
// });
// console.log(ageTotal);

//  ??????????????????????????????????????????????
// let result = Object.values(munsters).filter(ele => ele.gender === 'male').reduce((a, b) => a.age + b.age);
// console.log(result);

//6. p
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };
// (Name) is a (age)-year-old (male or female).
// for (let idx in munsters) {
//   console.log(`${idx} is a ${munsters[idx].age}-year-old ${munsters[idx].gender}.`);
// }

// let munArr = Object.entries(munsters);
// //console.log(munArr);
// munArr.forEach(ele => {
//   console.log(`${ele[0]} is a ${ele[1].age}-year-old ${ele[1].gender}.`);
// });

//8. use .forEach method to log string w/ all vowels
//from each string from each array
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// let allVowels = '';
// let objValues = Object.values(obj);

// objValues.forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(letter => {
//       if ('aeiou'.includes(letter)) {
//         allVowels += letter;
//       }
//     });
//   });
// });
// console.log(allVowels);

//9. return an array w/ same structure but with values in ascending order
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let resultArr = arr.map(nestedArr => {
//   if (nestedArr.some(ele => typeof ele === 'number')) {
//     return nestedArr.slice().sort((a, b) => a - b);
//   } else {
//     return nestedArr.slice().sort();
//   }
// });

// ...or
// let resultArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });
//console.log(resultArr);

//10. arrange elems in subarrays by descending order
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let resultArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'number') {
//     return subArr.slice().sort((a, b) => b - a);
//   } else {
//     return subArr.slice().sort().reverse();
//   }
// });

// arr.map(subArr => {
//   return subArr.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }

//     if (a < b) {
//       return 1
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

// console.log(resultArr);

//11. using .map, return new array identical to original but w/
//numeric values incremented by one. leave original array unmutated.
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let resultArr = arr.map(obj => {
//   let newObj = {...obj};

//   for (let key in newObj) {
//     newObj[key] += 1;
//   }
//   return newObj;
// });

// ...or
// let resultArr = arr.map(obj => {
//   let newObj = {};

//   for (let key in obj) {
//     newObj[key] = obj[key] + 1;
//   }
//   return newObj;
// });

// ????????????????????????????????????????? can i use .values
// let resultArr = arr.map(obj => {
//   let newObj = {...obj};
//   //console.log(newObj);
//   Object.values(newObj).forEach(num => newObj[num] + 1);

//   //console.log(newObj);
//   return newObj;
// });

// console.log(resultArr);
// console.log(arr);

// ????????????????? does the use of .forEach always stop the rtn flow ?????????

//12. using filter...return a new array ident. to original array structure,
//but only include nums that are multiples of 3 (3, 9, 15, 18)
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let resultArr = arr.map(subArr => {
//   return subArr.filter(number => number % 3 === 0);
// });
// console.log(resultArr);

//13. rtn original array structure. arrange subarr in asscending order
//by sumof odds
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
/*
data structures:
  - array to return overall result
  - 3 subarrays to hold intact elements

algo:
  - iterate through subarrays of parent array
  - create a copy of subarrays
  - iterate through numbers of subarray
  - during iteration, create a test condition for odd numbers
  - if odds found, accumulate and assign to totalvariable
  - sort by comparing totalvariable from each subarrays
*/

// let resultArr = arr.map(subArray => {
//   return subArray.sort((a, b) => {
//     subArray.forEach(number => {
//       if (number % 2 !== 0) {
//         number += number;
//         a[number] - b[number];
//       }
//     });
//   });
// });

// function oddSum(arr) {
//   let total = 0;
//   arr.forEach(num => {
//     if (num % 2 !== 0) {
//       total += num;
//     }
//   });
//   return total;
// }
//console.log(oddSum([1, 2, 3, 4, 5]));

// let resultArr = arr.sort();
//console.log(resultArr);

// let array = {
//   this: function sort() {};
// }
// someArray.sort(); // .sort(this.someArray)
(function printGreeting() {
  console.log('hello');
})();



//14. rtn an array
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let objValues = Object.values(obj);
// let result = [];

// objValues.map(eachObj => {
//   for (let key in eachObj) {
//     if (eachObj[key] === 'vegetable') {
//       eachObj.size = eachObj.size.toUpperCase();
//       result.push(eachObj.size);
//     } else if (eachObj[key] === 'fruit') {
//       eachObj.colors.forEach(color => {
        
//       });
      
//     }
//   }
// });
// console.log(result);

// let resultArr = objValues.map(eachObj => {
//   for (let key in eachObj) {
//     if (eachObj[key] === 'vegetable') {
//       eachObj.size = eachObj.size.toUpperCase();
//       //console.log(eachObj.size.toUpperCase());
//     } else {
//     }
//   }
//   return eachObj;
// });

//console.log(resultArr);