const resetBtn = document.getElementById("reset");
const message = document.getElementById("message");
const rulesBtn = document.getElementById('open-rules')
const body = document.querySelector('body')
// Player
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const playerLizard = document.getElementById("player-lizard");
const playerSpock = document.getElementById("player-spock");
const playerScoreEl = document.getElementById("player-score");
const playerChoiceEl = document.getElementById("player-choice");
// Computer
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const computerLizard = document.getElementById("computer-lizard");
const computerSpock = document.getElementById("computer-spock");
const computerScoreEl = document.getElementById("computer-score");
const computerChoiceEl = document.getElementById("computer-choice");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerScoreNumber = 0
let computerScoreNumber = 0



//Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

//Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

function displayComputerChoice() {
  //Add 'selected' styling & computerChoice
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.innerText = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.innerText = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.innerText = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.innerText = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.innerText = " --- Spock";
      break;

    default:
      break;
  }
  computerChoiceEl.innerText = ` --- ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
}

//Check result, increase scores, update message
function updateScore(playerChoice) { 
  if(playerChoice === computerChoice) {
    message.textContent = 'Tie'
  } else {
    const choice = choices[playerChoice]
    // console.log(choice.defeats.indexOf(computerChoice));
    if(choice.defeats.indexOf(computerChoice) > -1) {
      message.innerText = 'You Won!'
      playerScoreNumber++
      playerScoreEl.innerText = playerScoreNumber
    } else {
      message.innerText = 'You Lost!'
      computerScoreNumber++
      computerScoreEl.innerText = computerScoreNumber
    }
  }
}

//Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}

//Passing player selection value and style icons
function select(playerChoice) {
  checkResult(playerChoice);
  //Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.innerText = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.innerText = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.innerText = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.innerText = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.innerText = " --- Spock";
      break;

    default:
      break;
  }
}

//Reset game container 
function resetGame() {
  resetSelected()
  playerScoreEl.innerText = '0'
  playerChoiceEl.innerText = ' --- Choice'
  computerScoreEl.innerText = '0'
  computerChoiceEl.innerText = ' --- Choice'
  message.innerText = ''
}

function openRules() {
  body.classList.toggle('show-rules')

  if(rulesBtn.classList.contains('fa-bars')) {
    rulesBtn.classList.replace('fa-bars', 'fa-times')
    rulesBtn.setAttribute('title', 'Close Rules')
  } else {
    rulesBtn.classList.replace('fa-times', 'fa-bars')
    rulesBtn.setAttribute('title', 'Open Rules')
  }
}

resetBtn.addEventListener('click', resetGame)
rulesBtn.addEventListener('click', openRules)