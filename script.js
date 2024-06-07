let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if(humanChoice==='rock' && computerChoice==='paper'){
        computerScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You lose! Paper beats Rock');
        return;
    }else if (humanChoice==='paper' && computerChoice==='scissors'){
        computerScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You lose! Scissors beats Paper') ;
        return;
    }else if (humanChoice==='scissors' && computerChoice==='rock'){
        computerScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You lose! Rock beats Scissors') ;
        return;
    }else if (humanChoice==='paper' && computerChoice==='rock'){
        humanScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You win! Paper beats Rock') ;  
        return; 
    }else if (humanChoice==='scissors' && computerChoice==='paper'){
        humanScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You win! Scissors beats Paper') ;
        return;
    }else if (humanChoice==='rock' && computerChoice==='scissors') {
        humanScore++;
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('You win! Rock beats Scissors') ;
        return;
    }else {
        console.log(`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`);
        console.log('It is a Draw!') ;
        return;
    }
}

function getComputerChoice()
{
    let computerChoice;
    let randomInt=Math.floor(Math.random()*3);
    if(randomInt==0){
        computerChoice="rock"
    }
    else if(randomInt==1){
        computerChoice="paper"
    }
    else{
        computerChoice="scissors"
    }   
    return computerChoice;
}

function getHumanChoice()
{
    let humanChoice=prompt('enter your choice').toLowerCase();
    return humanChoice
}

function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your Score: ${humanScore} --- Computer Score: ${computerScore}`);
    }
}

playGame();
