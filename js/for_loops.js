(function () {
    "use strict";
    function showMultiplicationTable (Num) {
        let i = 1;
        while (i <= 10) {
            console.log(Num + " * " + i + " = " + Num * i);
            i++
        }
    }
    showMultiplicationTable(7);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    for (let i = 1; i < 10; i++) {
        let randomNum = getRandomIntInclusive(20, 200);
        console.log(randomNum);
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even!");
        } else {
            console.log(randomNum + " is odd!");
        }
    }
    //Can't get triangle to display same number for each row.
    for (let i = 1; i <= 9; i++)
    {
        for (let j = 0; j < i; j++)
        {
            console.log(i+"");
        }
    }
    for (let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
})();