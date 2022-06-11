'use strict';

const rpsArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const compResult = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[compResult];
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return "It's a tie! Try again"
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playerSelection, computerSelection);
console.log(playRound('Rock', computerPlay()));