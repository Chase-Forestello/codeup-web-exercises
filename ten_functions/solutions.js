"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
let userinput;
function isTrue(userInput) {
    return userInput === true;
}
function isFalse(userInput) {
    return userInput === false;
}
function not(userInput) {
    return userInput = !userInput;
}
function addOne(userInput) {
    return ++userInput;
}
//boolean value "false" is not testing correctly.
function isEven(userInput) {
    return parseFloat(userInput) % 2 === 0;
}
function isIdentical(userInput, userinput) {
    return userInput === userinput;
}
function isEqual(userInput, userinput) {
    return userInput == userinput;
}
function or(userInput, userinput) {
    return userInput || userinput;
}
function and(userInput, userinput) {
    return userInput && userinput;
}
function concat(userInput, userinput) {
    return userInput.toString() + userinput.toString();
}
