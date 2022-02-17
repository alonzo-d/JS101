// # Multiples of 3 and 5 #

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
