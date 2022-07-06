var userInput
const computerChoice = []
const rounds = 100 
var winsNeeded
var userWins = 0
var computerWins = 0 
var round = 0
var roundResult = ""
var gamesNeeded

for (let i = 0; i < rounds; i++) {
    function random() {
        return Math.floor(Math.random()*3)
    }

    var computerInput = random()

    if (computerInput === 0) {
        computerChoice.push("Rock")
    } else if (computerInput === 1) {
        computerChoice.push("Paper")
    } else {
        computerChoice.push("Scissors")
    }
}

function Rounds(number) {
    gamesNeeded = number
    document.getElementById("round-choice").innerHTML = `You have chosen a best of ${gamesNeeded}. Good luck!`;
    if (number === 3) {
        winsNeeded = 2
    } else if (number === 5) {
        winsNeeded = 3
    } else if (number === 7) {
        winsNeeded = 4
    }
}


function Decision(hand) {
    userInput = hand
    console.log(userInput)
    if (userInput === "Paper" && computerChoice[round] === "Rock") {
        userWins += 1
        roundResult = "You won that round"
        document.getElementById("user-score").innerHTML = `${userWins}`;
    } else if (userInput === "Rock" && computerChoice[round] === "Scissors") {
        userWins += 1
        roundResult = "You won that round"
        document.getElementById("user-score").innerHTML = `${userWins}`;
    } else if (userInput === "Scissors" && computerChoice[round] === "Paper") {
        userWins += 1
        roundResult = "You won that round"
        document.getElementById("user-score").innerHTML = `${userWins}`;
    } else if (computerChoice[round] === "Paper" && userInput === "Rock") {
        computerWins += 1
        roundResult = "You lost that round"
        document.getElementById("comp-score").innerHTML = `${computerWins}`;
    } else if (computerChoice[round] === "Rock" && userInput === "Scissors") {
        computerWins += 1
        roundResult = "You lost that round"
        document.getElementById("comp-score").innerHTML = `${computerWins}`;
    } else if (computerChoice[round] === "Scissors" && userInput === "Paper") {
        computerWins += 1
        roundResult = "You lost that round"
        document.getElementById("comp-score").innerHTML = `${computerWins}`;
    } else if (computerChoice[round] === userInput) {
        roundResult = "You tied that round"
    } 
    round += 1
    if (userWins === winsNeeded) {
        document.getElementById("round-result").innerHTML = `You succesfully conquered the computer with a final score of: ${userWins} to ${computerWins}`;
    } else if (computerWins === winsNeeded) {
        document.getElementById("round-result").innerHTML = `Unfortunately the computer has beat you by a final score of: ${computerWins} to ${userWins}`;
    } else {
        document.getElementById("round-result").innerHTML = roundResult;
    }
}

  


