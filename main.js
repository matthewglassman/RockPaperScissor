// function getUserChoice (userInput){
//     userInput = userInput.toLowerCase();

//     if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
//         return userInput;
//     }else{
//         console.log('Please enter a valid choice rock, paper or scissor.');
//     }
// }

//getUserChoice('ROCK');

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

getComputerChoice();