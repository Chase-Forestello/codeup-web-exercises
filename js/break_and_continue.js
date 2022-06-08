// Complete - JavaScript I - Loops - Exercise
(function () {
    "use strict";
    // Prompt the user for an odd number between 1 and 50. Use a loop
    // and a break statement to continue prompting the user if they enter
    // invalid input. Use a loop and the continue statement to output all
    // the odd number between 1 and 50, except for the number the user entered.
    let userNum;
    while (true) {
        userNum = parseFloat(prompt("Please enter an odd number between 1 and 50"));
        if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
            console.log("Thank you for your odd number: " + userNum);
            break;
        }
    }
    for (let i = 1; i <= 50; i++) {
        if (i === userNum) {
            console.log("Skipping " + userNum);
            continue;//if i = userNum the loop will skip this iteration of i and continue on.
        }
        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
        }
    }
})();