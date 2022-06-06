➢ Ten Functions
===============

"Ten Functions" is a prepared environment for practicing introductory function writing with automated tests for feedback.

## Setup Instructions

1. Clone this project

    ```
    git clone THIS_REPOSITORY_URL ~/IdeaProjects/ten-functions
    ```

    Replacing `THIS_REPOSITORY_URL` with the clone url of this repository. The clone url can be found by clicking on the green "Code" button. Make sure you are using the SSH remote; the url should start with `git@github.com`, **not** `https://`. If the url starts with `https://`, click the button in the top right of the dialog that says "Use SSH".

1. Open up the project with your IDE.

1. Write your javascript code for the problems described below in
   `solutions.js`.

1. Open up `index.html` in your web browser to see the test results.

## Workflow

1. At first, all of the test results will be red and failing, as you haven't written any code in `solutions.js` yet.

1. Inside of `solutions.js` write code that creates the functions detailed in the section below.

1. As you make changes to the code in `solutions.js`, refresh the `index.html` page in your browser.

1. Observe how the test results change as you update your functions code.

1. Read the output from the failing tests to help you figure out what changes you need to make to `solutions.js`.

## The "Ten Functions" Exercises

0. The comments to the right of the function call example demonstrate the output
   of the function's operation on the provided input(s). Add your function
   definitions to `solutions.js`. Refresh `index.html` to run automated tests
   for feedback on your solutions.

1. Define a function named `isTrue` that takes in any input and returns true if
   the input provided is exactly equal to `true` in value and data type.

        isTrue(true)             // true
        isTrue(false)            // false
        isTrue(0)                // false
        isTrue(null)             // false
        isTrue("true")           // false
        isTrue("Banana")         // false
        isTrue([1, 2])           // false

2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

        isFalse(false)             // true
        isFalse(true)              // false
        isFalse(0)                 // false
        isFalse(null)              // false
        isFalse("")                // false
        isFalse("Banana")          // false
        isFalse([1, 2])            // false

3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.

        not(false)                  // true
        not(0)                      // true
        not("")                     // true
        not(null)                   // true
        not(NaN)                    // true
        not(undefined)              // true
        not(true)                   // false
        not("something")            // false
        not(Infinity)               // false
        not(123)                    // false

4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.

        addOne(0)                    // 1
        addOne(2)                    // 3
        addOne(-5)                   // -4
        addOne(5.789)                // 6.789
        addOne(Infinity)             // Infinity
        addOne("2")                  // 3
        addOne("0")                  // 1
        addOne("banana")             // NaN
        addOne(true)                 // NaN
        addOne(NaN)                  // NaN


5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`. Any other input should return false for the output.

        isEven(2)                   // true
        isEven(-8)                  // true
        isEven(0)                   // true
        isEven("42")                // true
        isEven(1)                   // false
        isEven("-3")                // false
        isEven(false)               // false
        isEven("banana")            // false

6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`. If the values are not the same data type or not the same value, return `false`.

        isIdentical(3, 3)                     // true
        isIdentical(false, false)             // true
        isIdentical("hello", "hello")         // true
        isIdentical(3, 3.0)                   // true
        isIdentical(undefined, undefined)     // true
        isIdentical(2, "2")                   // false
        isIdentical("javascript", "java")     // false

7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

        isEqual(3, "3")                       // true
        isEqual("abc123", "abc123")           // true
        isEqual(true, 1)                      // true
        isEqual(0, false)                     // true
        isEqual(4, -5)                        // false
        isEqual("java", "javascript")         // false

8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.

        or(true, true)                    // true
        or(true, false)                   // true
        or(false, true)                   // true
        or(false, false)                  // false
        or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)



9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.

        and(true, true)                    // true
        and(true, false)                   // false
        and(false, true)                   // false
        and(false, false)                  // false
        and("hello", "world")              // "world" (this behavior is non-obvious, research more)


10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.

        concat("code", "up")                // "codeup"
        concat("connect", 4)                // "connect4"
        concat("hello", "world")            // "helloworld"
        concat(4, 2)                        // "42"
        concat(true, true)                  // "truetrue"

## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.

- `isBoolean("Dog")` should return `false` because a string is not a boolean
- `isBoolean(false)` should return `true` because only true and false are boolean values.
- When a problem says `return`, it means `return`, not `console.log`.
- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's referencing a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```

## About

- Testing framework: <a href="https://github.com/jasmine/jasmine">Jasmine</a>
- "Ten Functions" Originally Made by [Ryan Orsinger](https://ryanorsinger.glitch.me/), adapted for use at [Codeup](https://codeup.com)
