// rtn the second to last word in string
function penultimate(str) {
  let strToArr = str.split(' ');
  return strToArr[strToArr.length - 2];
}

// return the middle word of string
// convert to array; get length of str;
// - if mod result is 1; divide by 2 and floor it
// return this value
function penMiddle(phrase) {
  let middleWord = 0;
  let strToArr = phrase.split(' ');

  if (strToArr.length % 2 === 1) {
    console.log('this has an odd number of elements');
    middleWord = Math.floor(strToArr.length / 2);
  }
  return strToArr[middleWord];
}

console.log(penultimate('cold water'));
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(penMiddle('the water today is Very, very, very cold indeed')); // 'Very'