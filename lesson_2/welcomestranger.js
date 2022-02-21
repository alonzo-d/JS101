// # Welcome Stranger #

function greetings(array, obj) {
  let arrToStr = array.join(' ');

  return `Hello, ${arrToStr}! Nice to have a ${obj['title']} ${obj['occupation']} around`;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

