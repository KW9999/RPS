function computerPlay() {
    let selectItem = Math.floor(Math.random()*3);
    if (selectItem === 0) {
        return 'rock'
    } else if (selectItem === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}




function playGame(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'The game is a tie! Rock ties rock.'
        } else if (computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock.'
        } else {
            playerScore++;
            return 'You win! Rock beats scissors.'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'You win! Paper beats rock!'
        } else if (computerSelection === 'paper') {
            return 'The game is a tie! Paper ties paper.'
        } else {
            computerScore++;
            return 'You lose! Scissors beats paper.'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.'
        } else if (computerSelection === 'paper') {
            playerScore++;
            return 'You win! Scissors beats paper.'
        } else {
            return 'The game is a tie! Scissors ties scissors'
        }
    } else {
        return "Error!";
    }
}

playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Pick rock, paper, or scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playGame(playerSelection, computerSelection));
        console.log('Player score = ' + playerScore);
        console.log('Computer score = ' + computerScore);
    }
}

game();