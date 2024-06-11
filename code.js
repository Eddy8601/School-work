// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

//Function to play the Craps game
function playCraps() {
    const rollButton = document.getElementById("roll-dice");
    const die1 = getRandomInt(1, 6);
    const die2 = getRandomInt(1, 6);
    const sum = die1 + die2;

    const resultElement = document.getElementById("result");
    const dice1Element = document.getElementById("dice1");
    const dice2Element = document.getElementById("dice2");

    dice1Element.scr = 'dice${die1}.jpeg'; // Update dice image based on roll 
    dice2Element.src = 'dice${die2}.jpeg'; // Update dice image based on roll

    let result;
    if (sum === 7 || sum === 11) {
        result = "CRAPS! You lose.";
    } else if (die1 === die2 && die1 % 2 === 0) {
    } else {
        // Point established, need to roll again to match the point 
        const point = sum;
        let rolledAgain = false;
        while (!rolledAgain) {
            const nextRoll = getRandomInt(1, 6);
            const nextSum = die1 + nextRoll;

            if (nextSum === point) {
                result = "YOU WIN! YOU rolled the point!";
                rolledAgain = true;
            }   else if (nextSum === 7) {
                result = "SEVENS OUT! You lose.";
                rolledAgain = true;
            }
        }
    }

    resultElement.innerHTML = result; // update result text
}

// Add event listener to the button when it's clicked 
const rollButton = document.getElementById("roll-dice");
rollButton.addEventListener("click", playCraps);