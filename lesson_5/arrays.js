// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// let resultArr = [];
// scores.forEach(ele => {
//   let score = ele.reduce((a, b) => a + b);
//   resultArr.push(score);
// });

// resultArr.sort((a, b) => a - b);
// console.log(resultArr);

/* study */ //??????????????????????????????????????????????????????????
// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => {
//   let totalAScore = a.reduce((number, next) => number + next);
//   let totalBScore = b.reduce((number, next) => number + next);

//   return totalAScore - totalBScore;
// });
// console.log(scores);
//////////////////////////////////

// let arr = [{ b: 'foo' }, ['bar']];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// console.log(deepCopiedArr[1].push('baz'));
// console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
// console.log(arr);           // => [ { b: 'foo' }, [ 'bar' ] ]

// let result = [[1, 2], [3, 4]].map(arr => arr[0]); // [1, 2] => 1 ; [3, 4] => 3 ; [1, 3]
// console.log(result);

// [[1, 2], [3, 4]].map(arr => {
//   console.log(arr[0]);
//   return arr[0];
// });

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

// console.log(myArr);

// let result = [[1, 2], [3, 4], [2, 2]].map(arr => {
//   return arr.map(num => num === 2);
// });
// console.log(result);
/////////////////////

// let result = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
//   return Object.keys(object).every(key => object[key][0] === key);
// });
// console.log(result);
// => [ { c: 'cat', d: 'dog' } ]

// for each element(obj) he draws an array of keys [a, b], [c, d]
// for each array of keys, he looks at every element (key) he uses the
// strict equality op. to compare the element (key: a, b, c, d) against the
// first indexed char of the key element, using object indexing reference.

// [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// });
// => [ [ 27 ], [ 'apple' ] ]
// let result = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(ele => (typeof ele === 'number' && ele > 13) || (typeof ele === 'string' && ele.length < 6));
// });
// console.log(result);
// let result = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(each => {
//     if (typeof each === 'number') {
//       return each > 13;
//     } else {
//       return each.length < 6;
//     }
//   });
// });
// console.log(result);
////////////////////////////

// [[[1, 2], [3, 4]], [5, 6]].map(arr => {
//   return arr.map(elem => {
//     if (typeof elem === 'number') { // it's a number
//       return elem + 1;
//     } else {                  // it's an array
//       return elem.map(number => number + 1);
//     }
//   });
// });
// [[[2, 3][4, 5]], [6, 7]]

// let arr = [1, 2];
// let newArr = arr.map(subArr => arr.pop());
// console.log(newArr); // [2, <1 empty item>]

