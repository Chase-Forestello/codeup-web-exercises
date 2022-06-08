// Complete - JavaScript I - Arrays - Exercise
(function () {
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Chase", "Sam", "Chris", "Matthew"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("names array has a length of: " + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Here is a name by accessing index 0: " + names[0]);
    console.log("Here is a name by accessing index 1: " + names[1]);
    console.log("Here is a name by accessing index 2: " + names[2]);
    console.log("Here is a name by accessing index 3: " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log("Here is index " + i + " from the names array using a for loop: " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    let i = -1
    names.forEach(function (element, index, array) {
        ++i
        console.log("Here is index " + i + " from the names array using a for each loop: " + element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function firstElement(first) {
        return console.log("The first element of this array is: " + first[0]);
    }

    firstElement(names);

    function secondElement(second) {
        return console.log("The second element of this array is: " + second[1]);
    }

    secondElement(names);

    //undefined in this example because the array length is only 4.
    function fifthElement(fifth) {
        return console.log("The fifth element of this array is: " + fifth[4]);
    }

    fifthElement(names);
})();