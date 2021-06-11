/*
function computerPlay
Have an array with rock, paper, scissors
Pick a random element from array
Store value in variable randomPick and return variable
*/
let playerSelection = prompt('Rock, paper or scissors?');
let computerSelection = computerPlay();
let result = 'blank'
let playerWon = 0
let computerWon = 0
let draw = 0


function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    let computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerSelection;
}



function playRound(playerSelection, computerSelection) {
    // your code here!
    
    /*playerSelection = playerSelection.toLowercase();*/
    
    if (playerSelection === computerSelection) {
        result = "It's a draw!";
        draw++;
        return result;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You win! Rock beats scissors!';
        playerWon++;
        return result;
    }
    else if (playerSelection == 'paper' &&  computerSelection == 'rock'){
        result = 'You win! Paper beats rock';
        playerWon++;
        return result;
    }  
    else if ((playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 'You win! Scissors beat Paper';
        playerWon++;
        return result;
    } 

    else {
        result = 'You lose';
        computerWon++;
        return result;
    }
  }

 
  
function game() {
  
let roundCounter = 0
  
for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    playerSelection = prompt('Rock, paper or scissors?');
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(result);
      
  }

  if (playerWon > computerWon) {
      console.log('You Won');
  } else if (computerWon > playerWon) {
      console.log('Computer Won!');
  } else {
      console.log("After 5 rounds its a tie");
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

