function getUserChoice (userInput){
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
        return userInput;
    }else{
        console.log('Please enter a valid choice rock, paper or scissor.');
    }
}

getUserChoice('ROCK');