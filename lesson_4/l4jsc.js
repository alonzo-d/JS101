//let obj = { fruit: 'apple', veg: 'kale', plant: 'cactus', suit: undefined};

// let arr = ['foo', 'bar', 'qux'];
// arr['car'] = 'red';
// // console.log(arr);
// // console.log(arr.length);

// arr[3] = 'blue';
// // console.log(arr);
// // console.log(arr.length);

// arr['boat'] = 'yellow';
// console.log(arr);
// console.log(arr.length);

// console.log(Object.keys(arr));
// console.log(Object.values(arr));
// console.log(arr.length);

// let newArr = [fruit = 2, veg = 1];
// console.log(newArr);
// console.log(newArr.length);
// console.log(Object.keys(newArr));
// console.log(Object.values(newArr));

// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
// obj['apple'] = 'Fruit';
// obj.carrot = 'Vegetable';

// console.log(obj);
// obj.pear = 'Fruit';
// obj['broccoli'] = 'Vegetable';
// console.log(obj);

// let string = 'the water is deep.';
// console.log(string.endsWith('Deep.'));

// while loop
// while (true) {
//   let randomNum = Math.floor(Math.random() * 10);
//   console.log(randomNum);

//   if (randomNum === 5) {
//     console.log('...exiting');
//     break;
//   }
// }
// do while
// let randomNum;

// do {
//   randomNum = Math.floor(Math.random() * 10);
//   console.log(randomNum);
// } while (randomNum !== 5);

// console.log('...exiting');

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };
// let pets = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < pets.length)  {
//   let currentPet = pets[counter];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }
// using for...in loop
// for (let currentPet in numberOfPets) {
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
// }
// using while loop
// let pets = Object.keys(numberOfPets); // [dogs, cats, fish]
// let idx = 0;
// while (idx < pets.length) {
//   let currentPet = pets[idx];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   idx += 1;
// }

//1.
/*
filter performs selection based on the truthiness
of the callback's rtn value
*/
// console.log([1, 2, 3].filter(num => 'hi'));
// console.log(['e', 'w', 5].filter(ele => 34));
// console.log(['e', 'w', 5].filter(ele => 0));

//2.
/*
because there is no explicit return statement, the
value of each callback iteration will return undefined.
therefore the result will be an array of three undefined elements
*/
// let arr = [1, 2, 3].map(num => {
//   num * num;
// });
// console.log(arr); // [undefined, undefined, undefined]

//4.
/*
pop returns the last element of the array. using the length property
after this method consequently returns the length of the popped
word: 'caterpillar'.
*/
//console.log(['ant', 'bear', 'caterpillar'].pop().length);

//5.
/*
even though each callback's returned value will be 2, 4, 6
respectively (because of the assignment expression), the overall
returned value will be true. (or an empty array of 3 spaces)
*/
// let arr = [1, 2, 3].every(num => {
//   return num = num * 2;
// });
// console.log(arr);

//7.
/*
the returned value here is [undefined, 'bear']. since the condition
of whether 'ant' is greater than 3 evaluates to false, the returned value
isn't returned. when a function doesn't explicitly return a value, it will
always return undefined.
*/
// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });

//8.
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let flintObj = {};

// flintstones.forEach((ele, idx) => {
//   flintObj[ele] = idx;
// });

// console.log(flintObj);

//9.
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesArr = Object.values(ages).reduce((a, b) => a + b);
// console.log(agesArr);

//10.
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let minAge = Math.min(...Object.values(ages));
// console.log(minAge);  // 10
//let agesArr = Object.values(ages);
//console.log(Math.min(...agesArr));  // 10

//11.
// let statement = "The Flintstones Rock";
// let result = {};

// let allLetters = statement.split('').filter(ele => ele !== ' ');

// allLetters.forEach(char => {
//   if (!result[char]) {
//     result[char] = 1;
//   } else {
//     result[char] += 1;
//   }
// });
// console.log(result);

//  ??????????????????????????????????????????????????????????????????????
// allLetters.forEach(char => {
//   result[char] = result[char] || 0;
//   result[char] += 1;
// });
// console.log(result);

// allLetters.forEach(char => {
//   if (Object.keys(result).includes(char)) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// });
// console.log(result);

// for (let counter = 0; counter < statement.length; counter += 1) {
//   let char = statement[counter];
//   if (char === ' ') continue;

//   result[char] = result[char] || 0;
//   result[char] += 1;
// }
// console.log(result);