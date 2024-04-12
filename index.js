const choices = ["Rock","Scissors","Paper"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random()*3)];
}