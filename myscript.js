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

    computerSelection = computerPlay();
    playerSelection = prompt("Type rock, paper, or scissors.").toLowerCase();


    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'The game is a tie! Rock ties rock.'
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock.'
        } else {
            return 'You win! Scissors loses to rock.'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats rock!'
        } else if (computerSelection == 'paper') {
            return 'The game is a tie! Paper ties paper.'
        } else {
            return 'You lose! Scissors beats paper.'
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors.'
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats paper.'
        } else {
            return 'The game is a tie! Scissors ties scissors'
        }
    }
}


