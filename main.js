/*The Trials of the Oracle

Captured in the heart of the ancient Kata Forests, you find yourself trapped in a dark, enigmatic chamber. 
The room is silent except for the voice of a mysterious oracle. It looms over you, demanding proof of
your coding prowess. A fan of The New York Times' infamous games, the oracle is particularly fond of 
challenges that tease the brain, like Wordle, Sudoku, and Connections. To escape, you must outsmart 
the oracle by conquering its three trials. 

Each trial reveals a fragment of the key to your freedom. Good luck! */

export function startGame(guess, mockRandomNumber = null) {
    const randomNumber = mockRandomNumber || Math.floor(Math.random() * 100) + 1;

// THIS WILL BE DELETED FOR THE CHALLENGE
    // The number guessing game logic
    function numberGuessGame(guess, randomNumber) {
        if (guess < 1 || guess > 100) { 
            return "Please enter a number between 1 and 100" 
        } else if (guess < randomNumber - 20) {
           return "Way too low" 
        } else if (guess > randomNumber + 20) { 
            return "Way too high" 
        } else if (guess === randomNumber) { 
            return "You got it!"; 
        } else if (guess > randomNumber) { 
            return "Too high!"; 
        } else if (guess < randomNumber) { 
            return "Too low!"; 
        } 
    }
// THIS WILL BE DELETED FOR THE CHALLENGE


    return numberGuessGame(guess, randomNumber);
}