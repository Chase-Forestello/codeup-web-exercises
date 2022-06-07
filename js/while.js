// Incomplete - JavaScript I - Loops - Exercise
(function () {
    "use strict";
    let num = 1
    while (num < 65000) {
        num = num * 2
        console.log(num);
    }
    /* var allCones = Math.floor(Math.random() * 50) + 50;
     console.log("Initial conage: " + allCones);
     let newCones;
     let y;
     let x;
     do {
         x = allCones;
         y = Math.floor(Math.random() * 5) + 1;
         if (y > x) {
             console.log("Sorry I only have " + x + " cones left!");
         } else {
             console.log(y + " cones sold " + x + " cones left.");
         }
     } while(x > 50); */
    let newCones;
    let newTotal;
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Initial conage: " + allCones);
    let original;
    do {
        original = allCones;
        let y;
        y = Math.floor(Math.random() * 5) + 1;
        newCones = original - y;
        if (y > newCones) {
            newTotal = (original - newCones)
            console.log("Sorry I only have " + newCones + " cones left!");
        } else {
            console.log(y + " cones sold " + newCones + " cones left.");
        }
    } while (newTotal < 0);
})();