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

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');

  span2.classList.add('span-red');
  span4.classList.add('span-red');
  const spanArr = [span1, span2, span3, span4];

  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You Are The Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer Beat You!`;
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

    span1.textContent = `You: `;
    span2.textContent = `${playerCount}`;
    span3.textContent = ` Computer: `;
    span4.textContent = `${computerCount}`;
    spanArr.forEach((span) => para.appendChild(span));
    para2.textContent = `You Win! ${playerSelection} Beats ${computerSelection}!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (
    (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors')
  ) {
    computerCount++;
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
        if (playerCount === 5) {
          para2.textContent = `You Are The Winner!`;
          para2.style.fontSize = '2.5rem';
          results.appendChild(para2);
          playerCount = 0;
          computerCount = 0;
          return;
        } else if (computerCount === 5) {
          para2.textContent = `You Lose! The Computer Beat You!`;
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

    span1.textContent = `You: `;
    span2.textContent = `${playerCount}`;
    span3.textContent = ` Computer: `;
    span4.textContent = `${computerCount}`;
    spanArr.forEach((span) => para.appendChild(span));
    para2.textContent = `You Lose! ${computerSelection} Beats ${playerSelection}!`;
    results.appendChild(para);
    results.appendChild(para2);
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')
  ) {
    if (score || messageResults) {
      if (score && messageResults) {
        score.parentNode.removeChild(score);
        messageResults.parentNode.removeChild(messageResults);
      } else if (messageResults) {
        messageResults.parentNode.removeChild(messageResults);
      }
    }

    span1.textContent = `You: `;
    span2.textContent = `${playerCount}`;
    span3.textContent = ` Computer: `;
    span4.textContent = `${computerCount}`;
    spanArr.forEach((span) => para.appendChild(span));
    para2.textContent = `It's A Tie!`;
    results.appendChild(para);
    results.appendChild(para2);
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));
