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

