let playerScore = 0;
let computerScore = 0;
let result;

function computersMove() {                 // returns the computer's move by declaring an array and randomizing through the length
    let arr = ['Rock', 'Paper', 'Scissors'];
    let random = arr[Math.floor(Math.random() * arr.length)];

    return random.toLowerCase();
}

function playersMove() {
    let move = prompt('What is your move? Rock, paper, or scissors?');
    if (move === null || move === '') {
        playersMove()
    } else {
        return move.toLowerCase();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return result = `YOU WIN, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return result = `YOU LOSE, ${computerSelection} beats ${playerSelection}.`;
    } else {
        return result = `Tie! You both chose ${playerSelection}.`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound(playersMove(), computersMove());
        console.log(result);
    }
    console.log(`You scored ${playerScore} and the computer scored ${computerScore}.`);
}

game();
// return `Tie, you both picked ${playerSelection}.`;








