const choices = ["rock","scissors","paper"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random()*3)];
}

function askThePlayer()
{
    let choicesAsString = JSON.stringify(choices);
    let isValid = false;
    let choice = "";

    while (!isValid){
        choice = prompt(`Please choose from ${choicesAsString} or quit by entering "quit"`);
        choice = choice.toLowerCase();
        if(choice === "quit")
            return "";
    
        isValid = choices.find((element) => element === choice);
    }

    return choice;
}