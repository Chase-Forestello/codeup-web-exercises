// Complete - JavaScript I - Conditionals - Exercise

(function () {
    "use strict";

    function analyzeColor(colorName) {
        let result;
        if (colorName === "red") {
            result = "Apples are red.";
        } else if (colorName === "orange") {
            result = "Sunsets are orange.";
        } else if (colorName === "yellow") {
            result = "Sunflowers are yellow.";
        } else if (colorName === "green") {
            result = "Grass is green.";
        } else if (colorName === "blue") {
            result = "The sky is blue.";
        } else if (colorName === "indigo") {
            result = "There are indigo colored things.";
        } else if (colorName === "violet") {
            result = "Violet is the color of some flowers";
        } else {
            result = "I don't know anything by that color.";
        }
        return result;
    }

// test run with "blue"
    console.log(analyzeColor("blue"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
// Log for checking color function
    console.log(analyzeColor(randomColor));

// Switch based duplicate of above code
    function analyzeColor(colorName) {
        let result;
        switch (colorName) {
            case "red":
                result = "Apples are red.";
                break;
            case "orange":
                result = "Sunsets are orange.";
                break;
            case "yellow":
                result = "Sunflowers are yellow.";
                break;
            case "green":
                result = "Grass is green.";
                break;
            case "blue":
                result = "The sky is blue.";
                break;
            case "indigo":
                result = "There are indigo colored things.";
                break;
            case "violet":
                result = "Violet is the color of some flowers.";
                break;
            default:
                result = "I don't know anything by that color.";
                break;
        }
        return result;
    }

// Log for checking color function with switch statements
    console.log(analyzeColor(randomColor));
// Prompt for user to see color selection and function behavior
    let userColor = prompt("What is your favorite color: red, orange, yellow, green, blue, indigo, or violet?");
    alert(analyzeColor(userColor));
    console.log(analyzeColor(userColor));

    /* ########################################################################## */
// function that returns a message stating old price, new price, and the applied discount
// based on a random lucky number.
    function calculateTotal(luckyNum, userTotal) {
        return userTotal;
    }
// log to test function
    console.log(calculateTotal(4, 100));
// Generate a random number between 0 and 6, prompt user for total, display relevant data
    var luckyNumber = Math.floor(Math.random() * 6);
// log to see lucky number generated
    console.log("Lucky number:" + luckyNumber);
// prompting user for total
    let userBill = parseFloat(prompt("What was your bill total?"));
// switch initiates
    calculateTotal(luckyNumber, userBill)
    let userNewBill = "Your bill of $" + userBill + " was reduced to $";
    switch (luckyNumber) {
        case 1:
            alert(userNewBill + (userBill - userBill * .10) + " with a lucky number 1 discount of 10% off!");
            break;
        case 2:
            alert(userNewBill + (userBill - userBill * .25) + " with a lucky number 2 discount of 25% off!");
            break;
        case 3:
            alert(userNewBill + (userBill - userBill * .35) + " with a lucky number 3 discount of 35% off!");
            break;
        case 4:
            alert(userNewBill + (userBill - userBill * .50) + " with a lucky number 4 discount of 50% off!");
            break;
        case 5:
            alert(userNewBill + (userBill - userBill) + " with a lucky number 5 discount of 100% off!");
            break;
        default:
            alert("Your bill of $" + userBill + " will not be reduced due to a lucky number 0 discount of 0% off!");
            break;
    }

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function numberGame() {
        let userEnterNum = confirm("Would you like to enter a number?");
        if (userEnterNum) {
            //happy path (number given)
            let userInput = prompt("Please enter a number!");
            if (isNaN(Number(userInput))) {
                alert("Incorrect data type! You must enter a number!")
            } else {
                alert(userInput + " plus 100 is " + (Number(userInput) + 100));
                if (userInput % 2 === 0) {
                    alert(userInput + " is even!");
                } else {
                    alert(userInput + " is odd!");
                }
                    if (userInput > -1 ) {
                        alert(userInput + " is positive!");
                    } else {
                        alert(userInput + " is negative!");
                    }
            }
        } else {
            //unhappy path (no number given)
            alert("Thanks anyways!");
        }
    }

    numberGame();
})();

// Not really sure what the issue is. Try reorganizing the last alert.
// Using number function on prompt gives NaN and without breaks the whole thing.
// I think the primary problem is how I'm checking for NaN. because the code is still running
// even when using a string "test" passed in and read as NaN. Something is allowing the code to
// keep running even though it is not a number (presumably improperly checking if it's a number).
// Tried about a million different ways to get this to work over 4ish hours. Brian's solution was clutch.

/*
function numberGame() {
    let userEnterNum = confirm("Would you like to enter a number?");
    if (userEnterNum) {
        //happy path (number given)
        let userInput = prompt("Please enter a number!");
        if (isNaN(Number(userInput))) {
            alert("Incorrect data type! You must enter a number!")
        } else {
            alert(userInput + " plus 100 is " + (~~userInput + 100));

            if (userInput % 2 === 0) {
                alert(userInput + " is even!");
            } else {
                alert(userInput + " is odd!");

                if (Math.sign(~~userInput) === 1) {
                    alert(userInput + " is positive!");
                } else {
                    alert(userInput + " is negative!");
                }
            }
        }
    } else {
        //unhappy path (no number given)
        alert("Thanks anyways!");
    }
}
numberGame();

   let userNum;
    let enterNum = confirm("Would you like to enter a number? Click \"OK\"");
    console.log("Entering number? " + enterNum);
    if (enterNum === true) {
        userNum = parseFloat(prompt("Enter a number!"));
        // Works for the most part. If a number is entered FIRST and then letters follow the number is taken.
        // If letters are entered first the code stops. How to prevent from evaluating when letters are entered AFTER a number?
        // parseFloat is part of that problem but seems to be the only working method currently.
        console.log(userNum);
        if (isNaN(userNum) === false) {
            if (userNum % 2 === 0) {
                alert(userNum + " is even!");
            } else {
                alert(userNum + " is odd!");
            }
            if (Math.sign(userNum) === 1) {
                alert("The number is positive!");
            } else {
                alert("The number is negative!");
            }
            return alert(userNum + " + 100 is " + (~~userNum + 100));
        } else {
            alert("You must enter a number!");
        }
    }
*/
