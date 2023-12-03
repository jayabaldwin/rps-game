// Identify variables

var options = ["R", "P", "S"];

// Prompt the user to enter a choice from the 3 options
var userChoice;

// Computer to pick an option 
// Find a way to randomly select an option as well
// i = 0, 1, 2

var randomIndex = ;
var computerChoice = options[randomIndex];

// You are alerting the user that computer has made a selection

if (userChoice===computerChoice) {
    // alert on tie
} else if (
    (userChoice === "R" && computerChoice ==="S") ||
    (userChoice === "P" && computerChoice ==="R") ||
    (userChoice === "S" && computerChoice ==="P")
) {
    // user wins
    // alert
} else {
    // user loose
    // alert
}