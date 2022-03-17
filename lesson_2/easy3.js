function crunch(string) {
  let condensedString = '';

  for (let charAt = 0; charAt <= string.length; charAt += 1) {
    if (!string.length) return '-';

    if (string[charAt] === string[charAt + 1]) {
      continue;
    } else {
      condensedString += string[charAt];
    }
  }
  return condensedString;
}

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch(''));                           // ""

function logInBox(string, width) {
  let emptySpace = string.length;

  if (width < string.length) {
    emptySpace = width;
    string = string.slice(0, width);
  }

  console.log(`+ ${'-'.repeat(emptySpace)} +`);
  console.log(`| ${' '.repeat(emptySpace)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(emptySpace)} |`);
  console.log(`+ ${'-'.repeat(emptySpace)} +`);
}

// logInBox('To boldly go where no one has gone before.');
// logInBox('To boldly go where no one has gone before.', 10);

//For a challenging but fun exercise, try word wrapping messages
// that are too long to fit, so that they appear on multiple lines
// but are still contained within the box. This isn't an easy problem,
// but it's doable with basic JavaScript.

function string(posInt) {
  let binStr = '';
  let unit = '10';
  let result = posInt / 2;

  if (posInt % 2 === 0) {
    binStr = unit.repeat(result);
  } else {
    binStr = unit.repeat(result) + 1;
  }
  return binStr;
}

function stringy(size) {
  let result = '';
  for (let i = 0; i < size; i += 1) {
    let number = ((i % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

