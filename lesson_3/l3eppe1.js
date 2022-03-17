
/* Lesson3 : 2. Easy Problems : Easy 1 */
//1.
// let numbers = [1, 2, 3]
// numbers[6] = 5; // will simply create empty spaces for non-defined elements :
// // [1, 2, 3, , , , 5]
// numbers[4]; // [1, 2, 3, , , , 5]
// console.log(numbers);
// console.log(numbers.map(() => 10));

// numbers[4] = undefined;
// console.log(numbers);
// console.log(numbers.map(() => 10));

//2.
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log((str1.endsWith('!')));
// console.log((str2.endsWith('!')));

//3.
// does object contain an entry 'Spot'?
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(Object.keys(ages).includes('Spot'));
// console.log(ages.hasOwnProperty('Spot'));

//4.
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// function strCorrection(string) {
//   //let restOf = string.slice(1).toLowerCase();
//   let restOf = string.substring(1).toLowerCase();
//   let resultStr = string.charAt(0).toUpperCase();
//   return resultStr + restOf;
// }

// console.log(strCorrection(munstersDescription));

//5.
// the following code will output:
// console.log(false == '0'); // true
// console.log(false === '0'); // false

//6.
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// // add the following entries into ages obj
// let additionalAges = { Marilyn: 22, Spot: 237 };

// // ages.Marilyn = 22;
// // ages.Spot = 237;
// //console.log(ages);

// // similar to merging arrays:
// //console.log({...ages, ...additionalAges});
// // ...or use assign object method
// console.log(Object.assign(ages, additionalAges));

//7.
// does the name 'Dino' appear in the string?
// eslint-disable-next-line max-len
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// // split then .includes
// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));
// // using indexOf
// console.log(str1.indexOf('Dino') > -1);
// console.log(str2.indexOf('Dino') > -1);

//8.
// add 'Dino' to the array
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// //flintstones.push('Dino');
// //console.log(flintstones);
// let newArr = ['Dino'];
// console.log([...flintstones, ...newArr]);
// //console.log(flintstones.concat('Dino'));
// flintstones[flintstones.length] = 'Dino';
// console.log(flintstones);

//9.
// add multiple items to array 'Dino' and 'Happy'
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// //flintstones.push("Dino", "Happy");
// //console.log(flintstones);
// console.log(flintstones.concat('Dino', 'Happy'));

//10.
// eslint-disable-next-line max-len
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// // Expected return value:
// // => 'Few things in life are as important as '

// console.log(advice.slice(0, advice.indexOf('house')));
// console.log(advice.substring(0, advice.indexOf('house')));