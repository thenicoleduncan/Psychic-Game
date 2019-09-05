// <!-- 1. [Watch the demo](https://youtu.be/qTc45Lox97g).

// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, 
// and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh 
// (just like when the user wins). -->

// array for the computer's choices
let computersChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// creating variables that will store the information that the user inputs
let wins = 0;
let losses = 0;
let guessesLeft = 0;
let yourGuessesSoFar = 0;

// creating variables that hold references to the places in the HTML where i want to display things on the browser
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesSoFarText = document.getElementById("yourGuessesSoFar-text");

    // this function is run whenever the user presses a key
    document.onkeyup = function(event) {

        // determines the users guess by pressing any key
        let userGuess = event.key;
  
        // determines what the computers guess will be at random
        let computerGuess = computersChoice[Math.floor(Math.random() * computersChoice.length)];
  
        // this increments the appropriate numbers
        if (userGuess === computerGuess) {
            wins++;
            yourGuessesSoFar++;
        } else {
            losses++;
            guessesLeft++;
        }

          // Display the user and computer guesses, and wins/losses/ties.
          userChoiceText.textContent = "You chose: " + userGuess;
          computerChoiceText.textContent = "The computer chose: " + computerGuess;
          winsText.textContent = "wins: " + wins;
          lossesText.textContent = "losses: " + losses;
          tiesText.textContent = "ties: " + ties;
    };





