# Odin - Rock Paper Scissors

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
- The game is played through a visual interface.
- The player plays a round by making a choice.
- Once the player or the computer reaches 5 points, the game ends.
- The player can reset the score.

The computer's choice will be random.

## Problem resolution

### Problems

1. How to select randomly a choice for the computer?
2. How to compare efficiently the player and computer selection?

### Solution

1. Set the three choices in an array and draw a random index to get the choice.
2. Store the choice in order according to the rules. Treat the array as a circular list. Find the player choice in the list, check if the next,[^1] element in the list. If it is, the player wins, if not, the computer wins.

## Steps

1. Create the `getComputerChoice()` function that returns a random selection between *Rock* *Paper* *Scissors*
2. Create the `playRound(playerChoice)` function that updates the player's score and the computer's score:
    1. Create the `compareChoices(a,b)` function that returns a number. 1 if *a* beats *b*, -1 if *b* beats *a*, 0 if equality.
    2. Use the `getComputerChoice()` and `compareChoices(a,b)` to compute the score of the round.
    3. Update the score by calling the appropriate function
3. Create the `updateScore(score)` that takes as a parameter the same value as the output of `compareChoices(a,b)`. When one reaches the score of 5.

[^1]: In the circular list, the next value of the last element is the first element of the list.
