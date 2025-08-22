/**This is the beginning of the course project.  */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computedChoice = Math.floor(Math.random() * 3);
    switch (computedChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "Error: Please refresh the page"
    }
    
}
function getHumanChoice() {
    return prompt('Please choose rock, paper, or scissors:');
}

function playRound(playerChoice, pcChoice) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let resetHumanChoice = humanChoice.toLowerCase().trim();
    if (resetHumanChoice === computerChoice) {
         console.log("The computer chose: " + computerChoice);
        console.log("You tied!");
        ++humanScore;
        ++computerScore;
    } else if (resetHumanChoice === "rock" && computerChoice === "scissors") {
         console.log("The computer chose: " + computerChoice);
        console.log("You won!");
        ++humanScore;
    } else if (resetHumanChoice === "paper" && computerChoice === "rock") {
         console.log("The computer chose: " + computerChoice);
        console.log("You win!");
        ++humanScore;
    } else if (resetHumanChoice === "scissors" && computerChoice === "paper") {
         console.log("The computer chose: " + computerChoice);
        console.log("You win!"); 
        ++humanScore;
    } else {
        console.log("The computer chose: " + computerChoice);
        console.log("You lose!")
        ++computerScore;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round: ${round}`);
        playRound();
        console.log(`Player ${humanScore}`);
        console.log(`Computer ${computerScore}`);
        
        function playRound(playerChoice, pcChoice) {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();

            let resetHumanChoice = humanChoice.toLowerCase().trim();
            if (resetHumanChoice === computerChoice) {
                console.log("The computer chose: " + computerChoice);
                console.log("You tied!");
                ++humanScore;
                ++computerScore;
            } else if (resetHumanChoice === "rock" && computerChoice === "scissors") {
                console.log("The computer chose: " + computerChoice);
                console.log("You won!");
                ++humanScore;
            } else if (resetHumanChoice === "paper" && computerChoice === "rock") {
                console.log("The computer chose: " + computerChoice);
                console.log("You win!");
                ++humanScore;
            } else if (resetHumanChoice === "scissors" && computerChoice === "paper") {
                console.log("The computer chose: " + computerChoice);
                console.log("You win!"); 
                ++humanScore;
            } else {
                console.log("The computer chose: " + computerChoice);
                console.log("You lose!")
                ++computerScore;
            }
        }
    }
}
playGame();

