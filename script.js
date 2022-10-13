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

let playerCount = 0;
let computerCount = 0;

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
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Rock beats Scissors`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Paper beats Rock`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Win! Scissors beats Paper`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Rock beats Scissors`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Paper beats Rock`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You are the Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer beat you`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        }
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `You Lose! Scissors beats Paper`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
  ) {
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    para.textContent = `Player 1: ${playerCount} Computer: ${computerCount}`;
    para2.textContent = `It's a Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));
