
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

