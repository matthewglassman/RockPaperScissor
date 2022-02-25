function getUserChoice (userInput){
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || 'paper' || 'scissors'){
        return userInput;
    }else{
        console.log('Please enter a valid choice rock, paper or scissor.');
    }
}

getUserChoice('ROCK');