const prompt = require("prompt-sync")();
const userInput = prompt("You must arrive at 1, -1. Press enter to begin" );

let x = Number(0);
let y = Number(0); 
let direction = '';


while (!((x == 1) && (y == -1)) && (direction !== "exit")){
    
    direction = prompt('Please type up, down, left, or right--');

// direction options
    if (direction === "up"){
    console.log("Your position is now", x,",", y = y + 1)
} 

    else if (direction === "down"){
        console.log("Your position is now", x,",", y = y - 1)
    }

    else if (direction === "left"){
        console.log("Your position is now", x = x - 1,",", y)
    }

    else if (direction === "right"){
        console.log("Your position is now", x = x + 1,",", y)
    }
} 
if (direction === "exit"){
    console.log("Game Over")
} 
else {
    console.log("Congratulations, you have arrived at", x, ",", y)

}