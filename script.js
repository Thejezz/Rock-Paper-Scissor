let choice = ['Rock', 'Paper', 'Scissor'];
let score = [];
function getComputerChoice(choice){
    let num = Math.floor(Math.random()*3);
    return choice[num];

}
function playRound(choice){
    let playerSelection = '';
    while(true){
        playerSelection = prompt('Rock-Paper-Scissor').toLowerCase();
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor'){
            break;
        }
        else{
            continue;
        }
    }
    let computerChoice = getComputerChoice(choice);
    playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1,playerSelection.length);
    if (playerSelection == computerChoice){
        score.push('D');
        return 'its a draw!';
    }
    else if (playerSelection == 'Rock' && computerChoice == 'Scissor') {
        score.push('W');
        return 'You win! Rock beats Scissor!'
    }
    else if (playerSelection == 'Paper' && computerChoice == 'Rock'){
        score.push('W');
        return 'You win! Paper beats Rock!';
    }
    else if (playerSelection == 'Scissor' && computerChoice == 'Paper'){
        score.push ('W');
        return 'You win! Scissor beats Paper';
    }
    else{
        score.push ('L');
        return `You lose! ${computerChoice} beats ${playerSelection}`;
    }
}   

function game(){
    let a = 0;
    for (let i = 0; i<5; i++){
        console.log(playRound(choice));
    }
    for (let i = 0; i<score.length; i++){
        if(score[i]=='W'){
            a++;
        }
    }
    console.log();
    a<(score.length/2) ? console.log(`You Lost! The computer won ${score.length - a} games out of ${score.length}`)
    : console.log(`You Won! You won ${a} games out of ${score.length}`);
    return score;
}

console.log(game())