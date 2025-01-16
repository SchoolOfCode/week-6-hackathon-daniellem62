// Welcome to guess the number game! Your task is to complete the guess the number game functionality. It should:
//MVP 1
// Take in a guess and returns a string with the following outcomes: 
// If the guess is correct, return "You got it!"
// If the guess is higher than the number, return "Too high!"
// if the guess is lower than the number, return "Too low!"
//MVP2
//Edge cases
// if the input invalid, return "Please enter a number between 1 and 100"
// if the input is not a number, return "Please enter a number between 1 and 100"
//MVP3
// if the guess is more than 20 higher than the number, return "Way too high"
// if the guess is more than 20 lower than the number, return "Way too low"
// if the guess is within 10 of the number, return "Close!"
//MVP4
// limit the number of guesses to 10
// if the user runs out of guesses, return "You lose! The number was [number]"
// if the user guesses the number within 10 guesses, return "You win! The number was [number]"
//MVP 5
// Keep track of guesses and return how many guesses are remaining
//MVP 6 
// Have a replay feature

//export function randomNumberFn() {
//    const randomNumber = Math.floor(Math.random() * 100) + 1;
//    return randomNumber;
//}//

export function startGame(guess, mockRandomNumber = null) {
    // Generate the random number (or use the mock number in tests)
    const randomNumber = mockRandomNumber || Math.floor(Math.random() * 100) + 1;

    // The number guessing game logic
    function numberGuessGame(guess, randomNumber) {
        if (guess < 1 || guess > 100) { // THIS WILL BE DELETED FOR THE CHALLENGE
            return "Please enter a number between 1 and 100" // THIS WILL BE DELETED FOR THE CHALLENGE
        } else if (guess < randomNumber - 20) {// THIS WILL BE DELETED FOR THE CHALLENGE
           return "Way too low" // THIS WILL BE DELETED FOR THE CHALLENGE
        } else if (guess > randomNumber + 20) {
            return "Way too high" 
        } else if (guess === randomNumber) { // THIS WILL BE DELETED FOR THE CHALLENGE
            return "You got it!"; // THIS WILL BE DELETED FOR THE CHALLENGE
        } else if (guess > randomNumber) { // THIS WILL BE DELETED FOR THE CHALLENGE
            return "Too high!"; // THIS WILL BE DELETED FOR THE CHALLENGE
        } else if (guess < randomNumber) { // THIS WILL BE DELETED FOR THE CHALLENGE
            return "Too low!"; // THIS WILL BE DELETED FOR THE CHALLENGE
        } // THIS WILL BE DELETED FOR THE CHALLENGE
    }

    // Play the game by calling numberGuessGame with the guess
    return numberGuessGame(guess, randomNumber);
}