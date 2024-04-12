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
        result = getNextOf(getIndexOf(a)) === b ? 1 : -1;
    } 
    
    return result;
}