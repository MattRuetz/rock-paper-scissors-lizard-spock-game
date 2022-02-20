const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
const confettiContainer = document.getElementById('confetti-container');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-solid');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

let startMessage = 'Your move pal...'; // on load

// Reset scores and selections, prep for new game
const resetAll = () => {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  resetSelected();
  updateScore(''); // will reset DOM score display elements
}

// Reset all selected icons
const resetSelected = () => {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  })
}

// Get a random choice for the computer
const computerRandomChoice = () => {
  const choiceArr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  computerChoice = choiceArr[Math.floor(Math.random()*5)];
}

// Check result of round, and iterate approp. score number
// IF playerChoice or computer choice are null / '', resetting.
  //Set scores to zero and load start message
const updateScore = (playerChoice) => {
  if(playerChoice === '' || computerChoice === '') {
    resultText.textContent = startMessage;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    return;
  }

  if(playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!"
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.includes(computerChoice)) {
      launchConfetti();
      resultText.textContent = "You Won!"
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lose!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// Call functions to process the turn
const checkResult = (playerChoice) => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}

// Pass player selection and styling icons accordingly
const displayComputerChoice = () => {

  switch(computerChoice) {

    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Pass player selection and styling icons accordingly
const select = (playerChoice) => {

  checkResult(playerChoice);

  switch(playerChoice) {

    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

var myCanvas = document.createElement('canvas');
document.getElementById('confetti-container').appendChild(myCanvas);

const launchConfetti = () => {
  confettiContainer.classList.replace('off', 'on');
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });

  myConfetti({
    particleCount: 100,
    spread: 200,
    ticks: 100
  });
  setTimeout(() => {
    confettiContainer.classList.replace('on','off');
  }, 1200);
}

// set initial vals
resetAll();
