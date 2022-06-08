// Incomplete - JavaScript I - Loops - Exercise
(function () {
    "use strict";
    let num = 1
    while (num < 65000) {
        num = num * 2
        console.log(num);
    }
    /*
    let newCones = 0
    let newTotal = 0
    let allCones = Math.floor(Math.random() * 50) + 50;
        console.log("Initial conage: " + allCones);
    let original = 0
    do {
        original = allCones;
        let y = 0
        y = Math.floor(Math.random() * 5) + 1;
        newCones = original - y;
        if (y > newCones) {
            newTotal += (original - newCones)
            console.log("Sorry I only have " + newCones + " cones left!");
        } else {
            console.log(y + " cones sold " + newCones + " cones left.");
        }
    } while (newTotal < 0);
    */
    var i = 1;

    do {
        console.log('while loop iteration #' + i);
        i++
    } while (i < 20);

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting cones to sell: " + allCones);
    do {
        let conesSold = Math.floor(Math.random() * 5) + 1;
        console.log("Cones to sell: " + conesSold);
        if (allCones > conesSold) {
            let conesRemaining = 0
            conesRemaining = (allCones - conesSold);
            console.log("Cones left to sell: " + conesRemaining);

            //proper function up to this point. Cannot get the loop to repeat. Something is wrong in this area.
        } else {
            console.log("Sorry I only have ");
        }
    } while (allCo > 1 );



})();