var userInput 
const computerChoice = []
const rounds = 100

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
console.log(computerChoice)
console.log(rounds)