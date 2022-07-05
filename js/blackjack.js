// Blackjack game
(function () {
    "use strict";
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    var suit = ["hearts", "clubs", "diamonds", "spades"];
    var deck = [];

    function getDeck() {
        var deck = [];

        for (var i = 0; i < suit.length; i++) {
            for (var x = 0; x < rank.length; x++) {
                var value = parseInt(rank[x]);
                if (rank[x] == "J" || rank[x] == "Q" || rank[x] == "K") {
                    value = 10;
                }
                if (rank[x] == "A") {
                    value = 11;
                }
                var card = {Rank: rank[x], Suit: suit[i], Value: value };
                deck.push(card);
            }
        }
        return deck;
    }

    console.log(getDeck());
    var botHand = [];
    var userHand = [];
    var user = 0; //user score
    var bot = 0; //bot score
    let score = `Your score: [${user}] &nbsp &nbsp &nbsp Computer score: [${bot}]`
    var listener1 = function(event) {
        alert(`Let's play Blackjack!`)
        document.write(`${score} <hr>`);
        document.createElement('button');
        document.write(`<button id="btn">Deal!</button>`) // how to talk to this? Should I use createElement?
    }
    console.log(`Let's play Blackjack!`);
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", listener1);
    var listener2 = function(event) {
        console.log("hello");
    }

    btn.addEventListener("click", listener2);

    let start = confirm(`Main Menu:\n1. "OK" to Play Blackjack\n2. "Cancel" to Exit the game`);
    if (start) {
        user = 0;
        bot = 0;
        document.write(`${score} <hr>`);
        console.log(`Your score: [${user}] Computer score: [${bot}]`);
        // could use a for loop and iterate through empty userHand popping until it's length is greater than 2 (dealOut)
        // then pop a single card each hit that follows (totally worked)
        for (let i = 0; i < 2; i++) {
            userHand.unshift(deck.pop())
            botHand.unshift(deck.pop())
        }
        console.log(userHand);
        console.log(botHand);
        console.log(deck);

        // let userDealOut1 = deck.pop();
        // console.log(userDealOut1);
        // let userDealOut2 = deck.pop();
        // console.log(userDealOut2);
        // let botDealOut1 = deck.pop();
        // console.log(botDealOut1);
        // let botDealOut2 = deck.pop();
        // console.log(botDealOut2);
        // userHand.unshift(userDealOut1, userDealOut2);
        // botHand.unshift(botDealOut1, botDealOut2);
        // console.log(userHand);
        // console.log(botHand);
        console.log(`Your count is = ${userHand[0].Value + userHand[1].Value}`);
        document.write(`Your hand is: [${userHand[0].Rank} ${userHand[0].Suit}] and [${userHand[1].Rank} ${userHand[1].Suit}] &nbsp &nbsp &nbsp Count = ${userHand[0].Value + userHand[1].Value} <hr>`);
        document.write(`Bot hand is: [----] and [${botHand[1].Rank} ${botHand[1].Suit}] <hr>`);
        let gameMenu = prompt(`Enter 1 to [Hit] \nEnter 2 to [Stand]\nEnter 3 to [Return to main menu]`)
        if (gameMenu === "1") {
            userHand.unshift(deck.pop())
        }
        console.log(userHand);
        //trying to continue prompting user with gameMenu until the select a valid option (1, 2, 3)
        //works, may need console logs
        //maybe use button event to hit / stand
    } else {
        alert(`Game canceled. Thanks anyways!`);
    }

})();