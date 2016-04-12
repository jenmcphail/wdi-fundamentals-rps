////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getComputerMove(move) {
   return move || randomPlay();
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()

function getWinner(playerMove,computerMove) {
    var winner;
        if (computerMove === playerMove) {
            winner = "tie";
        } else if (( computerMove === "rock" && playerMove === "scissors") || (computerMove === "paper" && playerMove === "rock") || (computerMove === "scissors" && playerMove === "paper")) {
            winner = "computer";
        } else {
            winner = "player";
        }
        return winner;
    };

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins <5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "tie") {
            console.log("You tied! You both played " + playerMove + ".");
        } else if (winner === "computer") {
            console.log ("You lost! You played " + playerMove + " and the computer played " + computerMove + ".");
        } else {
            console.log("You won! You played" + playerMove + " and the computer played " + computerMove + ".");
        }
    console.log("your total wins are: " + playerWins + ". And the computer's total wins are: " + computerWins);
    }
      
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    return [playerWins, computerWins];
}

