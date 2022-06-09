// Complete - JavaScript I - Objects - Exercise
(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Chase", lastName: "Forestello"
    };
    console.log("The firstName property of the person object is: " + person.firstName);
    console.log("The lastName property of the person object is: " + person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName);
    }
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [{name: 'Cameron', amount: 180}, {name: 'Ryan', amount: 250}, {name: 'George', amount: 320}];
    shoppers.forEach(function (x) {
        if (x.amount > 200) {
            let discount = x.amount * .12;
            let newAmount = x.amount - discount;
            console.log(x.name + " spent: $" + x.amount + " and is eligible for a 12% discount of: $" + discount + " for a new total of: $" + newAmount);
        } else {
            console.log(x.name + " did not spend more than $200 and is not eligible for a discount.");
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [{
        title: "Escape From Furnace", author: {
            firstName: "Alexander", lastName: "Smith",
        }
    }, {
        title: "Percy Jackson", author: {
            firstName: "Rick", lastName: "Riordan",
        }
    }, {
        title: "The Lost City of Z", author: {
            firstName: "David", lastName: "Grann",
        }
    }, {
        title: "A Long Way Gone", author: {
            firstName: "Ishmael", lastName: "Beah",
        }
    }, {
        title: "The Underneath", author: {
            firstName: "Kathi", lastName: "Appelt",
        }
    }]
    console.log(books);
    books.forEach(function (x) {
        console.log(x.title + " was written by: " + x.author.firstName + " " + x.author.lastName);
    })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (x, y) {
        console.log("Book # " + (y + 1));
        console.log("Title: " + x.title);
        console.log("Author: " + (x.author.firstName + " " + x.author.lastName));
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// sorta working but not efficient or automated

    function CreateBook(bookTitle, authorName) {
        return {
            title: bookTitle, author: {
                firstName: authorName.split(" ")[0], lastName: authorName.split(" ")[1]
            }
        }
    }

    let CreatedBooksArray = [];
    CreatedBooksArray.push(CreateBook("Escape From Furance", "Alexander Smith"));
    CreatedBooksArray.push(CreateBook("Percy Jackson", "Rick Riordan"));
    CreatedBooksArray.push(CreateBook("The Lost City of Z", "David Grann"));
    CreatedBooksArray.push(CreateBook("A Long Way Gone", "Ishmael Beah"));
    CreatedBooksArray.push(CreateBook("The Underneath", "Kathi Appelt"));
    console.log(CreatedBooksArray);

    /*
        console.log("Constructed book object: " + CreateBook("City of Ember", "Jeanne DuPrau"));
    */

})();