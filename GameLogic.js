
let computerWins = 0;
let playerWins = 0;
let playerSelection = null
let picture = document.querySelector("img");

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click',  (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            playerSelection = 'rock';
            PlayRound(playerSelection);
            break;
        case 'paper':
            playerSelection = 'paper';
            PlayRound(playerSelection);
            break;
        case 'scissors':
            playerSelection = 'scissors';
            PlayRound(playerSelection);
            break
        case 'spock':
            playerSelection = 'spock';
            PlayRound(playerSelection);
            break;
        case 'lizard':
            playerSelection = 'lizard';
            PlayRound(playerSelection);
    }
});


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
    //Get computer selection
    picture.setAttribute('src', '')
    computerSelection = getComputerChoice();
    let scoreresults = document.querySelector('#gameResults');
    let score = document.querySelector('#score');
    //Determine winner by comparing selections. Add one to win total.
    if (playerSelection == computerSelection) {
        scoreresults.textContent = ("Skynet made the same selection. You have tied.")
    }
    if (playerSelection == "rock") {
        if (computerSelection == 'paper') {
            computerWins += 1;
            scoreresults.textContent =("You lose. Paper beats Rock");
        }
        if (computerSelection == "scissors") {
            playerWins += 1;
            scoreresults.textContent =("You win. Rock beats Scissors.");
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins += 1;
            scoreresults.textContent =("You win. Paper beats Rock.")
        }
        if (computerSelection == "scissors") {
            computerWins += 1;
            scoreresults.textContent =("You lose. Scissors beats Paper.")
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins += 1;
            scoreresults.textContent =("You lose. Rock beats Scissors.")
        }
        if (computerSelection == "paper") {
            playerWins += 1;
            scoreresults.textContent =("You win. Scissors beats paper.")
        }
    }
    if ((computerWins < 5 && playerWins < 5)){
        score.textContent = (`Currently, Skynet has won ${computerWins} rounds and you have won ${playerWins} rounds.`)
    }
    else{
        if (computerWins > playerWins) {
            scoreresults.textContent =("You lost. Skynet has defeated humanity.");
            picture.setAttribute('src', "w=300.webp");
        }
        else {
            scoreresults.textContent =("You won. You are a regular ole' John Connor.");
            picture.setAttribute('src', "todd2.jpg")
        }
        computerWins = 0;
        playerWins = 0;
        score.textContent = ("Click a selection to play again.")
    }
}
