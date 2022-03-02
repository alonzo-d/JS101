//Problem Description
// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.


/*
Input: string of alphabetic characters
Output: string
Rules:
  -input string might include both upper and lowercase characters
  -index 0 corresponds to position 1 -> 1 char in output string
  -first char of each letter sequence must be uppercased
  -use a hyphen to separate the different letter sequences
Data structures:
  -array of characters
Questions:
  -what if a character appears multiple times in input string?
Algorithm:
  -Declare a `result` variable and assign it to an empty string
  -Coerce input string to all lowercase characters
  -For each character in input string
    -Create a string `currentLetter` and assign it to that char in uppercase
    -Create a string of as many such characters as the current index and append it to `currentLetter`
    -Append a hyphen + `currentLetter` to `result`
  -return `result` starting at index 1
*/

// function accum(str) {
//  str = str.toLowerCase();
//  let result = "";

//  str.split("").forEach((char, idx) => {
//    let currentLetter = char.toUpperCase();
//    currentLetter += char.repeat(idx);
//    result += "-" + currentLetter;
//  });

//  return result.slice(1);
// }

// //more concise
// function accum(str) {
//  return str.toLowerCase()
//            .split("")
//            .map((char, idx) => char.toUpperCase() + char.repeat(idx))
//            .join("-");
// }


// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"