/*The Trials of the Oracle

Captured in the heart of the ancient Kata Forests, you find yourself trapped in a dark, enigmatic chamber. 
The room is silent except for the voice of a mysterious oracle. It looms over you, demanding proof of
your coding prowess. A fan of The New York Times' infamous games, the oracle is particularly fond of 
challenges that tease the brain, like Wordle, Sudoku, and Connections. To escape, you must outsmart 
the oracle by conquering its three trials. 


The Challenge
The Oracle whispers a secret number between 1 and 100, and it’s up to you to guess it. Each guess will lead you closer to the truth—or deeper into the labyrinth of uncertainty. Here's how the oracle responds:

🟩 "You got it!" – You've unlocked the oracle's secret!
🔺 "Too high!" – Your guess soars above the truth.
🔻 "Too low!" – Your guess falls short of the mark.
🚨 "Way too high!" – The oracle mocks your overconfidence.
🚨 "Way too low!" – You’re wandering far from the path.
⚠️ "Please enter a number between 1 and 100." – The oracle tolerates no invalid guesses.

Each trial reveals a fragment of the key to your freedom. Good luck! */

export function startGame(guess, mockRandomNumber = null) {
    const randomNumber = mockRandomNumber || Math.floor(Math.random() * 100) + 1;



    function numberGuessGame(guess, randomNumber) {
    //YOUR CODE GOES HERE*************
    //YOUR CODE GOES HERE*************
    //YOUR CODE GOES HERE*************
    }



    return numberGuessGame(guess, randomNumber);
}