let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let play = document.querySelector('#play');
let scoreboard = document.querySelector('#score');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * gameChoices.length);

    return gameChoices[randomChoice];
}

let playerScore = 0;
let cpuScore = 0;
let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let cpuScoreDisplay = document.querySelector('#cpuScoreDisplay');

let playRound = (playerChoice, cpuChoice) => {

    if(playerScore === 5) {
        play.textContent = `You won the game!`
    } else if(cpuScore === 5) {
        play.textContent = `You lost the game!`
    } else {
        switch (true) {
            case (playerChoice == cpuChoice):
                play.textContent = `Round ends in a draw, you both selected ${playerChoice}`;
                break;
            case (playerChoice === 'rock' && cpuChoice === 'scissors') 
            || (playerChoice === 'paper' && cpuChoice === 'rock') 
            || (playerChoice === 'scissors' && cpuChoice === 'paper'):
                play.textContent = `You beat the cpu!  Your choice ${playerChoice} beats the CPU choice of ${cpuChoice}.`;
                playerScore++;
                userScoreDisplay.textContent = `Your Score: ${playerScore}`
                break;
            default:
                play.textContent = `You lost to the cpu!   CPU chose ${cpuChoice} to beat your ${playerChoice}.`;
                cpuScore++;
                cpuScoreDisplay.textContent = `CPU Score: ${cpuScore}`
                break;
        }       
    }

};