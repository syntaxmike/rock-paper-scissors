function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * gameChoices.length);

    return gameChoices[randomChoice];
}

function getUserChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const userChoice = prompt(`Rock, Paper, or Scissors?
Choice must be typed as shown above.`);

    if(userChoice === null) {
        alert(`Game canceled`);
        return 0;
    } else if (gameChoices.includes(userChoice.toLowerCase())) {
        return userChoice.toLowerCase();
    } else {
        alert(`Invalid response`);
        return getUserChoice();
    }

}

function playRound(playerSelection, computerSelection) {
    const PLAYER_WON = `You won the round!`;
    const PLAYER_LOST = `You lost the round!`;
    const TIE_GAME = `The round was a draw`;

    switch (playerSelection) {
        case 'rock':
            if(computerSelection === 'paper') {
                return PLAYER_LOST;
            } else if(computerSelection === 'scissors') {
                return PLAYER_WON;
            } else {
                return TIE_GAME;
            }
        case 'paper':
            if(computerSelection === 'scissors') {
                return PLAYER_LOST;
            } else if(computerSelection === 'rock') {
                return PLAYER_WON;
            } else {
                return TIE_GAME;
            }
        case 'scissors':
            if(computerSelection === 'rock') {
                return PLAYER_LOST;
            } else if(computerSelection === 'paper') {
                return PLAYER_WON;
            } else {
                return TIE_GAME;
            }
    }
}

function game() {

    alert(`Five round game of Rock, Paper, Scissors!
Round history will be the console.`);
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {

        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if(playerSelection === 0) {
            console.log(`Game was canceled by the user`);
            break;
        }

        playerScore = (result.search(`won`) != -1) ? ++playerScore : playerScore;
        computerScore = (result.search(`lost`) != -1) ? ++computerScore : computerScore;

        console.log(`${result}`);

    }

    console.log(`*Final score* Player: ${playerScore} | Computer: ${computerScore}`);

    if(playerScore > computerScore) {
        console.log(`You won the game!`)
    } else if(playerScore === computerScore) {
        console.log(`The game ends in a draw`)
    } else {
        console.log(`You lost the game :(`)
    }
}

game();
