function computerPlay() {
    let selectItem = Math.floor(Math.random()*3);
    if (selectItem === 0) {
        return 'rock'
    } else if (selectItem === 1) {
        return 'paper'
    } else {
        return 'scissors';
    }
}

console.log("The computer chose: " +computerPlay());