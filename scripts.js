let playerScore = 0;
let computerScore = 0;
let result;
let roundResult = document.createElement('p');
const main = document.querySelector('main');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

function computersMove() {                 // returns the computer's move by declaring an array and randomizing through the length
    let arr = ['Rock', 'Paper', 'Scissors'];
    let random = arr[Math.floor(Math.random() * arr.length)];

    return random.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return result = `Round won, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return result = `Round lost, ${computerSelection} beats ${playerSelection}.`;
    } else {
        return result = `Tie round! You both chose ${playerSelection}.`;
    }
}

function updateScore() {
    cScore.textContent = `Computer score: ${computerScore}`;
    pScore.textContent = `Your score: ${playerScore}`;

    if (playerScore === 5) {
        let gameOver = document.createElement('h1');        // appends 'You win/You lose' alerts and disables buttons once score limit is hit
        main.appendChild(gameOver);
        gameOver.textContent = 'You win! Please refresh to play again.';
        disableButton();
    } else if (computerScore === 5) {
        let gameOver = document.createElement('h1');
        main.appendChild(gameOver);
        gameOver.textContent = 'You lose! Please refresh to play again.';
        disableButton();
    }
}
updateScore();

function showRoundResult() {      // appends each round's results and then removes it when score limit is hit
    main.appendChild(roundResult);
    roundResult.textContent = result;

    if (playerScore >= 5 || computerScore >= 5) {
        roundResult.remove();
    }
}

rockBtn.addEventListener('click', () => {
    playRound('rock', computersMove());
    updateScore();
    showRoundResult()
});

paperBtn.addEventListener('click', () => {
    playRound('paper', computersMove());
    updateScore();
    showRoundResult()
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computersMove());
    updateScore();
    showRoundResult()
});


function disableButton() {      // disables buttons when score limit is hit
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// function game() {
//     for (i = 0; i < 5; i++) {
//         playRound(playersMove(), computersMove());
//         console.log(result);
//     }
//     console.log(`You scored ${playerScore} and the computer scored ${computerScore}.`);
// }

// game();









