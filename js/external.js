// JavaScript I - JavaScript with HTML - inline/external JS - Exercise - Part 1
(function () {
    "use strict";
    console.log("Hello from external Javascript.")
    alert("Welcome to my Website!");
    let favColor = prompt("What is your favorite color?");
    alert("Great! " + favColor + " is my favorite color too!");
// JavaScript I - JavaScript with HTML - Completing Exercise 3 from previous lesson - Exercise - Part 2
//Movie exercise
    let movie1 = prompt("How long did you rent The Little Mermaid?");
    console.log(movie1);
    let movie2 = prompt("How long did you rent Brother Bear?");
    console.log(movie2);
    let movie3 = prompt("How long did you rent Hercules?");
    console.log(movie3);
    let pricePerDay = 3;
    let cost = (pricePerDay * movie1) + (pricePerDay * movie2) + (pricePerDay * movie3);
    console.log(cost);
    alert("You will have to pay: $" + cost + " for these movies.");
//Pay exercise
//Pay
    let googlePay = 400;
    let amazonPay = 380;
    let facebookPay = 350;
    let google = prompt("How many hours did you work at Google this week?");
    console.log(google);
    console.log("If Google pays $400/Hr, then you made $" + (google * googlePay) + " this week from Google!");
    alert("If Google pays $400/Hr, then you made $" + (google * googlePay) + " this week from Google!");
//Amazon pay
    let amazon = prompt("How many hours did you work at Amazon this week?");
    console.log(amazon);
    console.log("If Amazon pays $380/Hr, then you made $" + (amazon * amazonPay) + " this week from Amazon!");
    alert("If Amazon pays $380/Hr, then you made $" + (amazon * amazonPay) + " this week from Amazon!");
//Facebook pay
    let facebook = prompt("How many hours did you work at Facebook this week?");
    console.log(facebook);
    console.log("If Facebook pays $350/Hr, then you made $" + (facebook * facebookPay) + " this week from Facebook");
    alert("If Facebook pays $350/Hr, then you made $" + (facebook * facebookPay) + " this week from Facebook");
//Total pay
    let total = (facebook * facebookPay) + (amazon * amazonPay) + (google * googlePay);
    console.log("The total made from work this week is $" + total);
    alert("The total made from work this week is $" + total);
//Class schedule conflict exercise
    let classSize = confirm("Click \"OK\" if the class is NOT full.")
// True = class has room
    let schedule = confirm("Click \"OK\" if the class does NOT conflict with your schedule.");
// True = class does not conflict with schedule
    if (classSize == true && schedule == true) {
        console.log("The class size and student schedule are compatible!");
        alert("There are no conflicts in your schedule or class vacancy, you may enroll in this course!");
    } else {
        console.log("You are not eligible to enroll in this course.");
        alert("You are not eligible to enroll in this course.");
    }
//Product offer exercise
    let premiumMemeber = confirm("Click \"OK\" if you are a premium member.");
    console.log(premiumMemeber);
    let coupon = confirm("Click \"OK\" if your coupon has not expired.");
    console.log(coupon);
    let itemCount = confirm("Click \"OK\" if you purchased two or more items.");
    console.log(itemCount);
    if ((itemCount == true && coupon == true) || premiumMemeber == true) {
        console.log("Eligible")
        alert("Your are eligible for the product offer!");
    } else {
        console.log("You are not eligible for this product offer.");
        alert("You are not eligible for this product offer.");
    }
})();

