// # Short Long Short #

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
