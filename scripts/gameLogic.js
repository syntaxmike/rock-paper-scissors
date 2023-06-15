const userChoices = document.querySelectorAll('#choices');
const play = document.querySelector('#play');
const scoreboard = document.querySelector('#score');

userChoices.forEach(key => key.addEventListener('click', getChoice));

function getChoice(e) {
    const player = e.srcElement.attributes[0].value;
    playRound(player, getComputerChoice());
}


function getComputerChoice() {
    const gameChoices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * gameChoices.length);

    return gameChoices[randomChoice];
}

function checkWinner (pScore, cScore) {

    const btn = document.createElement('button');
    btn.textContent = 'Play Again?';
    btn.addEventListener('click', () => {
        playAgain();
    });
    btn.className = 'btn-style';

    if(pScore === 5) {
        play.textContent = `You won the game!`
        play.appendChild(btn);
    } else if(cScore === 5) {
        play.textContent = `You lost the game!`
        play.appendChild(btn);
    }
}

function playAgain() {
    playerScore = 0;
    cpuScore = 0;
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU Score: ${cpuScore}`;
    play.textContent = ``;
} 

let playerScore = 0;
let cpuScore = 0;
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const cpuScoreDisplay = document.querySelector('#cpuScoreDisplay');

const playRound = (playerChoice, cpuChoice) => {

    if(playerScore !== 5 && cpuScore !== 5) {
        switch (true) {
            case (playerChoice == cpuChoice):
                play.textContent = `Round ends in a draw\r\nBoth players selected ${playerChoice}`;
                break;
            case (playerChoice === 'Rock' && cpuChoice === 'Scissors') || (playerChoice === 'Paper' && cpuChoice === 'Rock') || (playerChoice === 'Scissors' && cpuChoice === 'Paper'):
                play.textContent = `Your selection of ${playerChoice} beats ${cpuChoice}.`;
                checkWinner(++playerScore, cpuScore)
                playerScoreDisplay.textContent = `Your Score: ${playerScore}`
                break;
            default:
                play.textContent = `Your selection of ${playerChoice} lost to ${cpuChoice}`;
                checkWinner(playerScore, ++cpuScore)
                cpuScoreDisplay.textContent = `CPU Score: ${cpuScore}`
                break;
        }       
    }

};