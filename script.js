// "use strict";

// const rpsArray = ["Rock", "Paper", "Scissors"];

// function computerPlay() {
//   const compResult = Math.floor(Math.random() * rpsArray.length);
//   return rpsArray[compResult];
// }

// // console.log(computerPlay())

// const rockBtn = document.querySelector('.rock-btn');
// const paperBtn = document.querySelector('.paper-btn');
// const scissorsBtn = document.querySelector('.scissors-btn');
// const playerSelection = document.querySelector('.player-selection');
// const computerSelection = document.querySelector('.comp-selection');
// const btns = document.querySelectorAll('.btn');
// const compScore = document.getElementById('comp-score');
// const playScore = document.getElementById('player-score');


// let computerScore = 0;
// let playerScore = 0;
// let counter = 0;

// let compSelect;
// let playSelect;

// function playRound() {
//   for (let i = 0; i <= 5; i++){
//     counter++;
//     if (counter == i) {
//       document.classList.remove('selection')
//     }
//   }
// }

// function scoring() {
//   if ((compSelect === "Scissors" && playSelect === "Rock") || (compSelect === "Paper" && playSelect === "Scissors") || (compSelect === "Rock" && playSelect === "Paper")) {
//     playerScore++;
//   playScore.textContent = playerScore;
//   } else if ((compSelect === "Paper" && playSelect === "Rock") || (compSelect === "Scissors" && playSelect === "Paper") || (compSelect === "Rock" && playSelect === "Scissors")) {
//     computerScore++;
//     compScore.textContent = computerScore;
//   } else {
//     computerScore = computerScore;
//     playerScore = playerScore;
//   }
  

// }

// rockBtn.addEventListener('click', function () {
//   playSelect = rpsArray[0];
//   compSelect = computerPlay();
//   playerSelection.textContent = "Rock";
//   computerSelection.textContent = `${compSelect}`;
//   scoring();
//   playRound();
// });

// paperBtn.addEventListener('click', function () {
//   playSelect = rpsArray[1];
//   compSelect = computerPlay();
//   playerSelection.textContent = "Paper";
//   computerSelection.textContent = `${compSelect}`;
//   scoring();
// });

// scissorsBtn.addEventListener('click', function () {
//   playSelect = rpsArray[2];
//   compSelect = computerPlay();
//   playerSelection.textContent = "Scissors";
//   computerSelection.textContent = `${computerPlay()}`;
//   scoring();
// });


const gameCounterDisplay = document.getElementById("game-counter");
const computerChoiceDisplay = document.getElementById("computer-choice");
const computerScoreDisplay = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const userScoreDisplay = document.getElementById("user-score");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".play-btn");
const resetGame = document.getElementById('reset-btn')
let playerChoice;
let computerChoice;
let result;
let computerScore = 0;
let userScore = 0;
let gameCounter = 0;


possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    if (computerScore < 5 && userScore < 5) {
      userChoice = e.target.id;
      userChoiceDisplay.textContent = userChoice;
      generateComputerChoice();
      getResult();
      gameCounter++;
      gameCounterDisplay.textContent = gameCounter;
      if (computerScore === 5 || userScore === 5) {
        if (computerScore > userScore) {
          result = "Computer Wins!";
        } else if (computerScore < userScore) {
          result = "You win!";
        } else if (computerScore === userScore) {
          result = "It's a draw!";
        }
        resultDisplay.innerHTML = result;
      }
    }
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    // result = "It's a draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    computerScore++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
  }
  computerScoreDisplay.innerHTML = computerScore;
  userScoreDisplay.innerHTML = userScore;
}


resetGame.addEventListener('click', function (){
  computerScore = 0;
  userScore = 0;
  gameCounter = 0;
  gameCounterDisplay.innerHTML = "";
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  computerScoreDisplay.innerHTML = "";
  userScoreDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
})