const startGameBtn = document.getElementById("start-game-btn");

let gameIsRunning = false;

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESILT_COMPUTER_WINS = "COMPUTER WINS";
const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK} , ${PAPER} or ${SCISSORS} ?`,
    " ",
  ).toUpperCase();
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Inavlid Choice, we chose ${DEFAULT_USER_CHOICE} for you`);
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = function (cChoice, pChoice) {
  if (pChoice == cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === SCISSORS && cChoice === PAPER) ||
    (pChoice === ROCK && cChoice === SCISSORS)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESILT_COMPUTER_WINS;
  }
};
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting ... !");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);

  console.log(winner);
});
