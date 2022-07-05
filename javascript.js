var userInput
const computerChoice = []
const rounds = 100 
var winsNeeded
var userWins = 0
var computerWins = 0 
var round = 0

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
    winsNeeded = number
    alert(`You need to beat the computer ${winsNeeded} times to emerge victorious!`)
    console.log(gamesNeeded)
}

function Decision(hand) {
    userInput = hand
    alert(`You have chosen ${userInput}`)
    console.log(userInput)
    if (userInput === "Paper" && computerChoice[round] === "Rock") {
        userWins += 1
        alert("You won! Paper beats rock")
    } else if (userInput === "Rock" && computerChoice[round] === "Scissors") {
        userWins += 1
        alert("You won! Rock beats scissors")
    } else if (userInput === "Scissors" && computerChoice[round] === "Paper") {
        userWins += 1
        alert("You won! Scissors beats paper")
    } else if (computerChoice[round] === "Paper" && userInput === "Rock") {
        computerWins += 1
        alert("You lost! Paper beats rock")
    } else if (computerChoice[round] === "Rock" && userInput === "Scissors") {
        computerWins += 1
        alert("You lost! Rock beats scissors")
    } else if (computerChoice[round] === "Scissors" && userInput === "Paper") {
        computerWins += 1
        alert("You lost! Scissors beats paper")
    } else if (computerChoice[round] === userInput) {
        alert("You tied! Try again")
    } 
    alert(`You have won ${userWins} games, while the computer has won ${computerWins}`)
    round += 1
    if (userWins === winsNeeded) {
        alert(`You succesfully conquered the computer with a final score of: ${userWins} to ${computerWins}`)
    } else if (computerWins === winsNeeded) {
        alert(`Unfortunately the computer has beat you by a final score of: ${computerWins} to ${userWins}`)
    }
}





