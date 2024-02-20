
let computerWins = 0;
let playerWins = 0;




//Create random number to return Rock, Paper, or Scissors for computer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        console.log("Skynet selects Rock.")
        return "rock";
    }
    if (choice == 1) {
        console.log("Skynet selects Paper.")
        return "paper";
    }
    if (choice == 2) {
        console.log("Skynet selects Scissors.")
        return "scissors";
    }
}
//Take player and computer choice and decide winner
function PlayRound(playerSelection, computerSelection) {

    //Set player choice to lowercase for case sensitivity
    playerSelection = prompt("Please enter a selection of rock, paper, or scissors.").toLowerCase();
    //Get computer selection
    computerSelection = getComputerChoice();
    //Determine winner by comparing selections. Add one to win total.
    if (playerSelection == computerSelection) {
        console.log("Skynet made the same selection. You have tied.")
    }
    if (playerSelection == "rock") {
        if (computerSelection == 'paper') {
            computerWins += 1;
            console.log("You lose. Paper beats Rock");
        }
        if (computerSelection == "scissors") {
            playerWins += 1;
            console.log("You win. Rock beats Scissors.");
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins += 1;
            console.log("You win. Paper beats Rock.")
        }
        if (computerSelection == "scissors") {
            computerWins += 1;
            console.log("You lose. Scissors beats Paper.")
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins += 1;
            console.log("You lose. Rock beats Scissors.")
        }
        if (computerSelection == "paper") {
            playerWins += 1;
            console.log("You win. Scissors beats paper.")
        }
    }
    
    console.log(`Currently, Skynet has won ${computerWins} rounds and you have won ${playerWins} rounds.`)
}
//Overall match. Run rounds of games.
function game() {
    //Play games until there has been 5 total wins.
    while ((computerWins + playerWins) < 5) {
        PlayRound();
    }
    if (computerWins > playerWins) {
        console.log("You lost. Skynet has defeated humanity.");
    }
    else {
        console.log("You won. You are a regular ole' John Connor.")
    }
    //Reset for a new game.
    playerWins = 0;
    computerWins = 0;
}