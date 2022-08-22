// Randomly return either "Rock", "Paper", "Scissors"
// Get a random number between 1 to 3

// Assign a random number to "Rock", "Paper", "Scissors"

// Console.log a string that says either "Rock", "Paper", "Scissors"

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else if (randomNumber === 3) {
    return "Scissors";
  }
}

// Write a function with two parameters
// Make playerSelection parameter case-insensitive
// Make playerSelection to lowerCase
// Make playerSelection first character upperCase
// Combine upperCase character and rest of lowerCase string

// Rock beats Scissors
// Rock loses to Paper
// Rock ties with Rock

// Paper loses to Scissors
// Paper beats Rock
// Paper ties with Paper

// Scissors beats Paper
// Scissors loses to Rock
// Scissors ties with Scissors

// Return a string that declares the winner of the round "You Lose!, Paper beats Rock"

function playRound(playerSelection, computerSelection) {
  let lowerCaseString = playerSelection.toLowerCase();
  let firstChar = lowerCaseString.slice(0, 1);
  let restOfString = lowerCaseString.slice(1);
  playerSelection = firstChar.toUpperCase() + restOfString;

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerCount++;
    console.log(playerCount);
    return console.log("You Win! Rock beats Scissors");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerCount++;
    console.log(playerCount);
    return console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerCount++;
    console.log(playerCount);
    return console.log("You Win! Scissors beats Paper");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerCount++;
    console.log(computerCount);
    return console.log("You Lose! Rock beats Scissors");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerCount++;
    console.log(computerCount);
    return console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerCount++;
    console.log(computerCount);
    return console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return console.log("It's a Tie!");
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return console.log("It's a Tie!");
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return console.log("It's a Tie!");
  }
}

// Write a function called game and call playRound function inside of game function
// Use prompt to get the input from the user
// Make it so you can play 5 rounds of the game
// Use a for loop to call the game function 5 times
// Keep score of who wins and loses each game
// Return a string message at the end of each round that announces the winner of the round
// At the end of the 5 games announce the ultimate winner of the whole 5 rounds
// If playerCount is greater than computerCount, then console.log "You are the winner!"
// If computerCount is greater than playerCount, then console.log "You lose! The computer beat you"
// Else console.log "Nobody Wins! It's a Tie!"

let playerCount = 0;
let computerCount = 0;

function game() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  let computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  game();
}

if (playerCount > computerCount) {
  console.log("You are the Winner!");
} else if (computerCount > playerCount) {
  console.log("You Lose! The Computer beat you");
} else {
  console.log("Nobody Wins! It's a Tie!");
}
