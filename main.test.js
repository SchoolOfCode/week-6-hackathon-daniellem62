import {test, expect, describe } from '@jest/globals'
import {startGame} from "./main.js"

// Welcome to guess the number game! Your task is to create a guess the number game. It should:
//MVP 1 COMPLETED
// Generate a random number between 1 and 100. 
// It takes in a guess and returns a string with the following outcomes: 
// If the guess is correct, return "You got it!"
// If the guess is higher than the number, return "Too high!"
// if the guess is lower than the number, return "Too low!"
//MVP2 COMPLETED
//Edge cases
// if the input invalid, return "Please enter a number between 1 and 100"
// if the input is not a number, return "Please enter a number between 1 and 100"
//MVP3 COMPLETED
// if the guess is more than 20 higher than the number, return "Way too high"
// if the guess is more than 20 lower than the number, return "Way too low"
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

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("You got it!");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Too high!" if the guess is higher than the number', () => {
        // Arrange
        const mockNumber = 50;
        const guess = 60;

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Too high!");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Too low!" if the guess is lower than the number', () => {
        // Arrange
        const mockNumber = 50;
        const guess = 40;

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Too low!");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Please enter a number between 1 and 100" if the input is out of range', () => {
        // Arrange
        const mockNumber = 50;
        const guess = 101;

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Please enter a number between 1 and 100");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Please enter a number between 1 and 100" if the input is not a number', () => {
        // Arrange
        const mockNumber = 50;
        const guess = "string";

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Please enter a number between 1 and 100");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Way too low if guess is more than 20 less than number', () => {
        // Arrange
        const mockNumber = 50;
        const guess = 20;

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Way too low");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });

    test('should return "Way too high" if guess is more than 20 greater than number', () => {
        // Arrange
        const mockNumber = 50;
        const guess = 80;

        // Mock the random number generation to return the mock number
        jest.spyOn(Math, 'random').mockReturnValue(0.49); // 0.49 * 100 = 49 + 1 = 50

        // Act
        const result = startGame(guess);

        // Assert
        expect(result).toBe("Way too high");

        // Restore the original Math.random
        jest.restoreAllMocks();
    });
});
