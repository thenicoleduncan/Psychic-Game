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
            yourGuessesSoFar++;
        }

          // display the user and computer guesses, and wins/losses/guesses left/your guesses so far
          winsText.textContent = "wins: " + wins;
          lossesText.textContent = "losses: " + losses;
          guessesLeftText.textContent = "guesses left: " + guessesLeft;
          yourGuessesSoFarText.textContent = "your guesses so far: " + yourGuessesSoFar;
    };





