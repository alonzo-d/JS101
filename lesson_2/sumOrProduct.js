// # Sum or Product of Consecutive Integers #

// GET : usk int. greater than 0.
// Get : user for sum or product between 1 and their given num.
// SET : increment var. at 1
// SET : result var at 0
// LOOP : While increment is less than their num, add/mult increment to result 
// PRINT : result

const rlSync = require('readline-sync');

let userNum = rlSync.question('Please enter a number greater than 0\n');
let userCalc = rlSync.question('Please enter "s" for sum, or "p" for product\n');

function add(num) {
	let result = 0;
	let inc = 1;
	while(inc <= userNum) {
		result += inc;
		inc += 1;
	}
	console.log(`The sum between 1 and ${userNum} is ${result}`);
}

function mult(num) {
	let result = 1;
	let inc = 1;
	while(inc <= userNum) {
		result *= inc;
		inc += 1;
	}
	console.log(`The product between 1 and ${userNum} is ${result}`);
}

if(userCalc === 's') {
	add(userNum);
} else if(userCalc === 'p') {
	mult(userNum);
}



