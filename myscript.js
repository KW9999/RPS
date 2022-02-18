function computerPlay(){
    let items = ["rock", "paper", "scissors"];
    let itemChoice = items[Math.floor(Math.random() * items.length)];
    return itemChoice;
}