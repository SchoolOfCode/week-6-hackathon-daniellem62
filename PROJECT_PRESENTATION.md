Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)
Introduction: The Great Number Oracle Challenge
Deep within the digital realms lies the mysterious Number Oracle, a being that hides a secret number between 1 and 100. Legends say that only the wisest coders can decode its cryptic messages to uncover the hidden number. Brave adventurers who guess too high or too low are met with its riddles, and those wildly off the mark receive an even harsher response. But if you manage to guess correctly, the Oracle will declare, “You got it!” and you’ll earn its eternal respect.

The Oracle doesn’t make things easy, though. Sometimes it provides vague clues, and it’s up to you to decipher them. Your mission is to write a function that can decode the Oracle’s responses based on a player’s guess and its secret number. Can you craft a program worthy of the Oracle’s approval?

Your Task
Write a function, startGame(guess, randomNumber), that takes two inputs:

guess - The player's guessed number.
randomNumber - The Oracle’s secret number (you can assume it’s a number between 1 and 100).
Using these inputs, your function must return one of the Oracle’s messages:

"You got it!" if the guess matches the Oracle’s number.
"Too high!" if the guess is greater but not more than 20 above the number.
"Too low!" if the guess is lower but not more than 20 below the number.
"Way too high" if the guess is more than 20 above the number.
"Way too low" if the guess is more than 20 below the number.
The Oracle is mysterious, so be mindful—don’t add any extra checks like input validation. Assume all guesses will be numbers between 1 and 100.

Example
Here’s how your function should behave:

startGame(50, 50); // "You got it!"
startGame(70, 50); // "Too high!"
startGame(30, 50); // "Too low!"
startGame(80, 50); // "Way too high"
startGame(20, 50); // "Way too low"
Now, code your way into the Oracle’s good graces and prove you’re worthy of the challenge!