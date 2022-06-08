// Complete - JavaScript I - Loops - Exercise
(function () {
    "use strict";

    function showMultiplicationTable(Num) {
        for (let i = 1; i <= 10; i++) {
            console.log(Num + " * " + i + " = " + Num * i);
        }
    }

    showMultiplicationTable(7);
    for (let i = 1; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        console.log(randomNum);
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even!");
        } else {
            console.log(randomNum + " is odd!");
        }
    }

//using nested for loops prints whole triangle in single line.
    let result = ""
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < i; j++) {
            result += i;
        }
        result += "\n";
    }
    console.log(result);

//using .repeat prints a new line for each row.
    for (let i = 1; i <= 9; i++) {
        let iAsString = i.toString();
        console.log(iAsString.repeat(i));
    }
    for (let i = 100; i >= 5; i -= 5/*same as i = i-5 */) {
        console.log(i);
    }

})();