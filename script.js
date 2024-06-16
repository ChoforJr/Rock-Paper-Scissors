let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    const div = document.createElement('div');
    
    const selectionMessage = document.createElement('p');
    div.appendChild(selectionMessage);
    const resultMessage = document.createElement('p');
    div.appendChild(resultMessage);
    const scoreMessage = document.createElement('p');
    div.appendChild(scoreMessage);

    document.body.appendChild(div);
    if(humanChoice==='rock' && computerChoice==='paper'){
        computerScore++;
        selectionMessage.textContent =`You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent ='You lose! Paper beats Rock';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else if (humanChoice==='paper' && computerChoice==='scissors'){
        computerScore++;
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'You lose! Scissors beats Paper';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else if (humanChoice==='scissors' && computerChoice==='rock'){
        computerScore++;
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'You lose! Rock beats Scissors';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else if (humanChoice==='paper' && computerChoice==='rock'){
        humanScore++;
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'You win! Paper beats Rock';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else if (humanChoice==='scissors' && computerChoice==='paper'){
        humanScore++;
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'You win! Scissors beats Paper';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else if (humanChoice==='rock' && computerChoice==='scissors') {
        humanScore++;
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'You win! Rock beats Scissors';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
        return;
    }else {
        selectionMessage.textContent = `You choose: ${humanChoice} --- Computer choose: ${computerChoice}`;
        resultMessage.textContent = 'It is a Draw!';
        scoreMessage.textContent = `Your Score: ${humanScore} --- Computer Score: ${computerScore}`;
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                alert('You won the game!');
            } else {
                alert('You lost the game!');
            }
            humanScore = 0;
            computerScore = 0;
        }
    })
})
