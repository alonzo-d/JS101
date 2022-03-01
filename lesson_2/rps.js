const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let players = {
  player: 0,
  dave: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function charToWord(abbreviation) {
  let result = '';
  if (abbreviation[0] === 'r') result = 'rock';
  if (abbreviation[0] === 'p') result = 'paper';
  if ((abbreviation[0] === 's') && (abbreviation[1] === 'c')) result = 'scissors';
  if ((abbreviation[0] === 's') && (abbreviation[1] === 'p')) result = 'spock';
  if (abbreviation[0] === 'l') result = 'lizard';
  return result;
}

function matchWinner(player, dave) {
  let playerWins = false;
  let result = '';
  if (player === dave) {
    result = `It's a tie!`;
  } else if ((player === 'rock' && (dave === 'scissors' || dave === 'lizard')) ||
      (player === 'scissors' && (dave === 'paper' || dave === 'lizard')) ||
      (player === 'paper' && (dave === 'rock' || dave === 'spock')) ||
      (player === 'lizard' && (dave === 'spock' || dave === 'paper')) ||
      (player === 'spock' && (dave === 'scissors' || dave === 'rock'))) {
    playerWins = true;
    players.player += 1;
    result = 'You Win!';
  } else if (!playerWins) {
    players.dave += 1;
    result = 'dave wins!';
  }
  return result;
}

function gameWinner(user, computer) {
  let result = '';
  if (user === 3) {
    result = `You got 3 out of 5. You're the winner!`;
    players.player = 0;
    players.dave = 0;
  } else if (computer === 3) {
    result = `The computer got 3 out of 5. Sorry you lose.`;
    players.dave = 0;
    players.player = 0;
  }
  return result;
}

while (true) {
  prompt(`Please choose one of the following: '(r)ock', '(p)aper', '(sc)issors', '(l)izard', '(sp)ock'`);
  let choice = charToWord(readline.question().toLowerCase());

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That doesn't appear to be a valid choice. Please try again.`);
    choice = charToWord(readline.question().toLowerCase());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let randomChoice = VALID_CHOICES[randomIndex];

  // game begins
  prompt(`You chose ${choice}, dave chose ${randomChoice}`);
  let displayMatchWinner = matchWinner(choice, randomChoice);
  prompt(displayMatchWinner);
  console.log(players.player);
  console.log(players.dave);
  let displayGameWinner = gameWinner(players.player, players.dave);
  prompt(displayGameWinner);

  prompt(`Would you like to play again? (y/n)`);
  let repeatGame = readline.question().toLowerCase();

  while (repeatGame[0] !== 'y' && repeatGame[0] !== 'n') {
    prompt(`Please enter 'y' or 'n'`);
    repeatGame = readline.question().toLowerCase();
  }

  if (repeatGame[0] !== 'y') break;
}