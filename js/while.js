// Complete - JavaScript I - Loops - Exercise
(function () {
    "use strict";

    let num = 1
    while (num < 65000) {
        num = num * 2
        console.log(num);
    }
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting with " + allCones + " cones.");
    do {
        let conesSold = Math.floor(Math.random() * 5) + 1;
        if (allCones >= conesSold) {
            allCones = allCones - conesSold; //updating allCones to reflect new number of cones.
            console.log(conesSold + " cones sold! I have " + allCones + " remaining.");
        } else {
            //unhappy path
            console.log("Sorry I only have " + allCones + " left! I can't sell you " + conesSold + ".");
        }
    } while (allCones !== 0)
    console.log("All cones sold!");

})();