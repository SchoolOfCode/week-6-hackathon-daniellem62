import {test, expect, describe, beforeEach, vi} from "vitest"
import {numberGuessGame, startGame} from "./main.js"

// Welcome to guess the number game! Your task is to create a guess the number game. It should:
//MVP 1 COMPLETED
// Generate a random number between 1 and 100. 
// It takes in a guess and returns a string with the following outcomes: 
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

describe("Number Guess Game Tests", () => {
    test('should return "You got it!" if the guess is correct', () => {
        // Arrange
        const mockNumber = 50;  
        const guess = mockNumber;  

        // Act
        const result = startGame(guess, mockNumber);  

        // Assert
        expect(result).toBe("You got it!");
    });

    test('should return "Too high!" if the guess is higher than the number', () => {
        // Arrange
        const mockNumber = 50;  
        const guess = 60;  

        // Act
        const result = startGame(guess, mockNumber);

        // Assert
        expect(result).toBe("Too high!");
    });

    test('should return "Too low!" if the guess is lower than the number', () => {
        // Arrange
        const mockNumber = 50;  
        const guess = 40;  

        // Act
        const result = startGame(guess, mockNumber);

        // Assert
        expect(result).toBe("Too low!");
    });

    test('should return "Please enter a number between 1 and 100" if the input is invalid', () => {
        // Arrange
        const mockNumber = 50;  
        const guess = null;  

        // Act
        const result = startGame(guess, mockNumber);

        // Assert
        expect(result).toBe("Please enter a number between 1 and 100");
    });
});