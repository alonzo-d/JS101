// # UTF=16 String Value #

function utf16Value(str) {
  let result = 0;

  for (let index = 0; index < str.length; index += 1) {
    result += str.charCodeAt([index]);
  }
  return result;
}

console.log(utf16Value('Four score')); // 984
console.log(utf16Value('Launch School')); // 1251
console.log(utf16Value('a')); // 97
console.log(utf16Value('')); // 0

const OMEGA = '\u03A9';
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811
