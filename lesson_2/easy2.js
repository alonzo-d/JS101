function oddities(array) {
  const rtnArr = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    rtnArr.push(array[idx]);
  }
  return rtnArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//return everyother element starting at index 1
function evenidx(array) {

  const evenElements = array.filter((ele, idx, arr) => {
    arr.push(ele);
    return idx % 2 !== 0;
  });
  return evenElements;
}

console.log(evenidx([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenidx([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenidx(["abc", "def"])); // logs ['def']
console.log(evenidx([123])); // logs []
console.log(evenidx([])); // logs []

function multisum(num) {
  let index = 1;
  let sum = 0;

  while (index <= num) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
    index++;
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

// rtn the second to last word in string
function penultimate(str) {
  let strToArr = str.split(' ');
  return strToArr[strToArr.length - 2];
}

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

function sLS(str1, str2) {
  let mergStr = '';
  if (str1.length > str2.length) {
    mergStr = str2.concat('', str1, str2);
  } else if (str2.length > str1.length) {
    mergStr = str1.concat('', str2, str1);
  }
  return mergStr;
}

console.log(sLS('three', 'two'));
