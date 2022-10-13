// Randomly return either "Rock", "Paper", "Scissors"
// Get a random number between 1 to 3

// Assign a random number to "Rock", "Paper", "Scissors"

// Console.log a string that says either "Rock", "Paper", "Scissors"

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return 'Rock';
  } else if (randomNumber === 2) {
    return 'Paper';
  } else if (randomNumber === 3) {
    return 'Scissors';
  }
}

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

function playRound(e) {
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();

  const results = document.querySelector('.results');
  const para = document.createElement('p');
  para.classList.add('score');
  const score = document.querySelector('.score');

  const para2 = document.createElement('p');
  para2.classList.add('message-results');
  const messageResults = document.querySelector('.message-results');

  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Rock beats Scissors`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Paper beats Rock`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Scissors beats Paper`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Rock beats Scissors`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Paper beats Rock`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerCount++;
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Scissors beats Paper`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
  ) {
    if (score && messageResults) {
      score.parentNode.removeChild(score);
      messageResults.parentNode.removeChild(messageResults);
    }
    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));

if (playerCount > computerCount) {
  console.log('You are the Winner!');
} else if (computerCount > playerCount) {
  console.log('You Lose! The Computer beat you');
}
