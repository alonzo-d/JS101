// # Greeting a user #

const rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');

if (name.includes('!')) {
  console.log(`hello ${name}. why are we screaming?.`.toUpperCase());
} else {
  console.log(`Hello ${name}`);
}
