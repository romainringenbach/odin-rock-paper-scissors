const choices = ["rock","scissors","paper"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    return choices[Math.floor(Math.random()*3)];
}

function getIndexOf(choice)
{
    return choices.findIndex((element) => element === choice);
}

function getNextOf(index)
{
    let nextIndex = index+1;
    if(nextIndex >= choices.length)
        nextIndex = 0;

    return choices[nextIndex];
}

function compareChoice(a,b)
{
    let result = 0;
    if(a !== b){
        result = getNextOf(getIndexOf(a)) === b ? 1 : -1; // If b is next of a, a beats b, if not, a is next of b, b beats a
    } 
    
    return result;
}

function playRound(playerChoice)
{
    let computerChoice = getComputerChoice();
    let result = compareChoice(playerChoice,computerChoice);
    let message = `No winner or loser! You both play ${playerChoice}`;

    switch (result) {
        case 1:
            playerScore += 1;
            message = `You win ! ${playerChoice} beats ${computerChoice}`;
            break;
        case -1:
            computerScore += 1;
            message = `You lose ! ${computerChoice} beats ${playerChoice}`;
            break;
        default:
            break;
    }
    updateUiScore();
    alert(message);
}

function updateUiScore(){
    const playerScoreElement = document.querySelector("#player-score");
    playerScoreElement.textContent = playerScore;

    const computerScoreElement = document.querySelector("#computer-score");
    computerScoreElement.textContent = computerScore;
}

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", (event) => {
        playRound(event.target.textContent.toLowerCase().trim())
    });
  });

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateUiScore();
    alert("You quit... Too afraid of losing to the computer huh?");
});