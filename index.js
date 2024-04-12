const choices = ["rock","scissors","paper"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random()*3)];
}

function askThePlayer()
{
    let choicesAsString = JSON.stringify(choices);
    let isValid = false;
    let choice = null;

    while (!isValid){
        choice = prompt(`Please choose from ${choicesAsString} or quit by entering "quit"`);
        choice = choice.toLowerCase();
        if(choice === "quit")
            return null;
    
        isValid = choices.find((element) => element === choice);
    }

    return choice;
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

function playRound()
{
    let computerChoice = getComputerChoice();
    let playerChoice = askThePlayer();
    let result = null;

    if(playerChoice){ // check player didn't quit
        result = compareChoice(playerChoice,computerChoice);
        switch (result) {
            case 1:
                console.log("You win !",playerChoice,"beats",computerChoice);
                break;
            case -1:
                console.log("You lose !",computerChoice,"beats",playerChoice);
                break;
            default:
                console.log("No winner or loser! You both play",computerChoice);
                break;
        }
    }
    return result;
}

function playGame(numberOfRounds=5)
{
    let playerScore = 0;
    for (let index = 0; index < numberOfRounds; index++) {
        let roundResult = playRound();
        if(roundResult != null){
            playerScore += roundResult;
        } else { // Player did enter quit when prompted for a choice
            console.log("You quit... Too afraid of losing to the computer huh?")
            return; 
        }
    }

    if(playerScore > 0){
        console.log("You win this game!");
    } else if(playerScore < 0){
        console.log("Game over!");
    } else {
        console.log("No winner or loser for this game!");
    }
}