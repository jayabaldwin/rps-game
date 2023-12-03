// Identify variables
var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];

// Function of the game
var playGame = function () {
    var userChoice = window.prompt("Enter R, P, S:");

    // If the user makes choice not to play
    if (!userChoice) {
        console.log("user abandoned");
    }

    // Convert r, p, s to capitals if the user enters it wrong, removing the case sensitivity
    userChoice = userChoice.toUpperCase()
    console.log(userChoice);

    // Computer selects at random
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    // Alert the user the computer has made a selection
    window.alert("The computer chose: " + computerChoice);

    //Outcomes
    if (userChoice===computerChoice) {
        // alert on tie
        ties++;
        window.alert("Tie");
    } else if (
        (userChoice === "R" && computerChoice ==="S") ||
        (userChoice === "P" && computerChoice ==="R") ||
        (userChoice === "S" && computerChoice ==="P")
    ) {
        // user wins
        // alert
        wins++;
        window.alert("You win! Congratulations!")
    } else {
        // user loose
        // alert
        losses++;
        window.alert("You lose! Better luck next time!");
    }

    window.alert("Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    // Play again alert
    var playAgain = window.confirm("Play Again?");
   

    if (playAgain) {
        playGame ();
    }
}

playGame ();