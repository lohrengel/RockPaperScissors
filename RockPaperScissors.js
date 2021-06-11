/*
function computerPlay
Have an array with rock, paper, scissors
Pick a random element from array
Store value in variable randomPick and return variable
*/

function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    let randomPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return randomPick;
}

let result = 'blank'

function playRound(playerSelection, computerSelection) {
    // your code here!
    
    /*playerSelection = playerSelection.toLowercase();*/
    
    if (playerSelection === computerSelection) {
        result = "It's a draw!";
        draw += 1;
        return result;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You win! Rock beats scissors!';
        playerWon += 1;
        return result;
    }
    else if (playerSelection == 'paper' &&  computerSelection == 'rock'){
        result = 'You win! Paper beats rock';
        playerWon += 1;
        return result;
    }  
    else if ((playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 'You win! Scissors beat Paper';
        playerWon += 1;
        return result;
    } 

    else {
        result = 'You lose';
        computerWon += 1;
        return result;
    }
  }

 
const playerSelection = "rock";
const computerSelection = computerPlay();

let playerWon = 0
let computerWon = 0
let draw = 0
  
function game() {
  
let roundCounter = 0
  
for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    playRound(playerSelection, computerSelection);
    console.log(result);
      
  }
}
 /* console.log(playRound(playerSelection, computerSelection));*/


  /* First draft
let the user choose rock paper or scissors
store value in userPick
convert userPick toLowercase
compare the variables 
    for userPick 'rock'
        if compPick 'rock' output 'draw'
        if compPick 'paper' output 'I win'
        if compPick 'scissors' output 'you win'
    for userPick 'paper'
        if compPick 'rock' output 'you won'
        if compPick 'paper' output 'draw'
        if compPick 'scissors' output 'i win'     
    for userPick 'scissors'
        if compPick 'rock' output 'i win'
        if compPick 'paper' output 'you win'
        if compPick 'scissors' output 'draw'     


*/ 

