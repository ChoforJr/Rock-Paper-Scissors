
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*100);
    if (computerChoice <=30) {
        return console.log('rock');
    } else if (computerChoice>30 && computerChoice<=60) {
        return console.log('paper');
    }else {
        return console.log('scissors');
    }
}

function getHumanChoice () {
    let humanChoice = prompt('Input rock, paper or scissors', 'paper');
    if (humanChoice == 'rock'){
        return console.log('rock');
    }else if (humanChoice == 'paper'){
        return console.log('paper');
    }else if (humanChoice == 'scissors') {
        return console.log('scissors');
    }else {
        return console.log('invalid input');
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice,computerChoice){
        case humanChoice=='rock'&&computerChoice=='paper':
            computerScore+=1;
            return console.log('You lose! Paper beats Rock');
        case humanChoice=='paper'&&computerChoice=='scissors':
            computerScore+=1;
            return console.log('You lose! Scissors beats Paper');
        case humanChoice=='scissors'&&computerChoice=='rock':
            computerScore+=1;
            return console.log('You lose! Rock beats Scissors');
        case humanChoice=='paper'&&computerChoice=='rock':
            humanScore+=1;
            return console.log('You win! Paper beats Rock');
        case humanChoice=='scissors'&&computerChoice=='paper':
            humanScore+=1;
            return console.log('You win! Scissors beats Paper');
        case humanChoice=='rock'&&computerChoice=='scissors':
            humanScore+=1;
            return console.log('You win! Rock beats Scissors');
        default :
        return console.log('It is a Draw!');
    }
   
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  

