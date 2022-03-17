//q1.
// for (let padding = 0; padding <= 10; padding += 1) {
//   console.log(' '.repeat(padding) + 'The Flintstones Rock!');
// }

//q2. swap the cases of all letters
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newString = '';

// for (let i of munstersDescription) {
//   if (i === i.toLowerCase()) {
//     newString += i.replace(i, i.toUpperCase());
//   } else if (i === i.toUpperCase()) {
//     newString += i.replace(i, i.toLowerCase());
//   }
// }
//console.log(newString);

//q3. ??????????????????????????????????????????????
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(-9));

//q4. // concatenating does not mutate original array; while .push does
// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// let buffer1 = [1, 2, 3, 4, 5];
// let buffer2 = [1, 2, 3, 4, 5];
// console.log(addToRollingBuffer1(buffer1, 5, 6));
// console.log(addToRollingBuffer2(buffer2, 5, 6));
// console.log(buffer1);
// console.log(buffer2);

////////////////
// Return a false condition, and handle the case when the input
//string has more or less than 4 components, e.g., 4.5.5 or
//1.2.3.4.5: both those values should be invalid."
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isIpLengthCorrect(arr) {
  return (arr.length === 4);
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (isIpLengthCorrect(dotSeparatedWords)) {
    let word = dotSeparatedWords.pop();
    return isAnIpNumber(word);
  }
  return false;
}

console.log(isDotSeparatedIpAddress('222.5.218.52')); // true
console.log(isDotSeparatedIpAddress('222.5.218'));  // false - array less than 4
console.log(isDotSeparatedIpAddress('222.5.218.52.234')); // false - array greater than 4
console.log(isDotSeparatedIpAddress('222.5.218.552')); // false - element greater than 255
