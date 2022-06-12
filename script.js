'use strict';

const rpsArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const compResult = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[compResult];
}

function playRound(playerSelection, computerSelection) {
    computerSelection;
    const result = `Your Score: ${playerScore}
Computer: ${computerScore}

`;
    if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        computerScore = computerScore + 1;
        return computerScore;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Paper') || (computerSelection == 'Paper' && playerSelection == 'Scissors') || (computerSelection == 'Scissors' && playerSelection == 'Rock')) {
        playerScore = playerScore + 1;
        return playerScore;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Rock') || (computerSelection == 'Paper' && playerSelection == 'Paper') || (computerSelection == 'Scissors' && playerSelection == 'Scissors')) {
        return 'tie';
    }
}


let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay();
let score = [8, 14];

function game() {
    for (let i = 0; i < 5; i++){
        const playerInput = prompt('Enter Rock, Paper, or Scissors');
        const caps = playerInput.slice(0, 1).toUpperCase();
        const lower = playerInput.slice(1).toLowerCase();
        const playerSelection = caps.concat(lower);
        if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
            i--;
            alert('Invalid input. Try again');
        }
    playRound(playerSelection, computerPlay());
    if (playerScore) {
        playerScore + 1;
    } else if (computerScore) {
        computerScore + 1;
    }
    console.log(`Your Score: ${playerScore} Computer Score: ${computerScore}`);
        
    }
}

game();

if (playerScore > computerScore) {
    alert("You win!");
    } else if (playerScore < computerScore) {
        alert('You lose!');
} else {
    alert("It's a tie!");
}
    
