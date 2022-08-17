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

console.log(getComputerChoice());
