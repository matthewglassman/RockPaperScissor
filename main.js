function getUserChoice (userInput){
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
        return userInput;
    }else{
        console.log('Please enter a valid choice rock, paper or scissor.');
    }
}

//getUserChoice('PAPER');

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3);
//    console.log(computerChoice);

    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

getComputerChoice();

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "This game is a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "The Computer is the winner!";
        }else if (computerChoice === 'scissors') {
            return "You are the winner!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors'){
            return "The Computer is the winner!";
        }else if (computerChoice === 'rock') {
            return "You are the winner!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "The Computer is the winner!";
        }else if (computerChoice === 'paper'){
            return "You are the winner!";
        }
    }
}

function playGame () {
    var userChoice1 = prompt('Please choose rock, paper or scissor.');
    var userChoice = getUserChoice(userChoice1);
    console.log(userChoice);
    
    var computerChoice = getComputerChoice();
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();