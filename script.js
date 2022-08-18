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
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a Tie!";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a Tie!";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return "It's a Tie!";
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
