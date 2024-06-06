
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*100);
    if (computerChoice <=30) {
        return console.log('Rock');
    } else if (computerChoice>30 && computerChoice<=60) {
        return console.log('Paper');
    }else {
        return console.log('Scissors');
    }
}
getComputerChoice();
