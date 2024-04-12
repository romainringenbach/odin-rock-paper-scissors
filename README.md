# Odin - Rock Paper Scissors

A javascript CLI video game.

## Introduction
This student project attends to check a few points:
- Problem-solving skills
- Javascript acknowledge
- Well-crafted git commit messages

## Description of the game

The player plays against the computer to *Rock Paper Scissors*.
The game lasts five rounds.
In each round, the player and the computer choose among *Rock*, *Paper*, and *Scissors*.
The player wins or loses the round against the computer according to these rules:
- *Rock* beat *Scissors*
- *Scissors* beat *Paper*
- *Paper* beat *Rock*
After the last round, the competitor that won the most rounds wins the game.

## Constraints

The game is played through the javascript console of the web browser:
- The game is started by calling a function: `playGame()`.
- The user inputs are asked through the `prompt()` function.
- The input system is case-insensitive and will have to handle wrong inputs
- The player can quit at any moment by entering *quit* when prompted for a choice.

The computer choice will be random.

## Problem resolution

### Problems

1. How to select randomly a choice for the computer?
2. How to make the player response case-insensitive?
3. How to check that the player input is valid?
4. How to handle the wrong input?
5. How to compare efficiently the player and computer selection?

### Solution

Note: at this step of the training, I am not supposed to know about arrays or loops. I should rely on conditional statements to check inputs, compute round results, etc... 
But since I am lazy, I am gonna use my knowledge about arrays and loops.

1. Set the three choices in an array and draw a random index to get the choice.
2. Transform player input into lowercase whatever is the input.
3. Store all choices in lowercase. Use the array of the random selection to check if the input is in.
4. Print a message indicating the input is wrong and ask the player again. 
5. Store the choice in order according to the rules. Treat the array as a circular list. Find the player choice in the list, check if the next,[^1] element in the list. If it is, the player wins, if not, the computer wins.

## Steps

1. Create the `getComputerChoice()` function that returns a random selection between *Rock* *Paper* *Scissors*
2. Create the `playRound()` function that returns 1 if the player won, -1 if the computer won and 0 if equality:
    1. Create the `askThePlayer()` function that prompts the player (and displays the available choice while prompting) and returns a choice in lowercase or quit if the player enters *quit*.
    2. Create the `compareChoices(a,b)` function that returns a number. 1 if *a* beats *b*, -1 if *b* beats *a*, 0 if equality.
    3. Use the `getComputerChoice()`, `askThePlayer()`, and `compareChoices(a,b)` to compute the score of the round and print a result message.
3. Create a function `playGame()` that loops five times, and call `playRound()` each time, then add the result to the global score,[^2] at each pass then print the final message to tell the winner.

[^1]: In the circular list, the next value of the last element is the first element of the list.
[^2]: Since the function `playRound()` returns 1 for the player's victory or -1 for the computer's victory we can just add the resulting number to the score. If at the end of the 5 round, the score is positive, the player won, if negative, the computer won.