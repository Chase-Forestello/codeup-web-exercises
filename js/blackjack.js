(function () {
    "use strict";

    var rank = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    var suit = ["hearts", "clubs", "diamonds", "spades"];
    var deck = [];

    function getDeck() {
        var deck = [];

        for (var i = 0; i < suit.length; i++) {
            for (var x = 0; x < rank.length; x++) {
                var card = {Value: rank[x], Suit: suit[i]};
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
    let score = `Your score: ${user} Computer score: ${bot}`
    alert(`Let's play Blackjack!`)
    console.log(`Let's play Blackjack!`);
    alert(score);
    console.log(score);
    let start = confirm(`Main Menu:\n1. "OK" to Play Blackjack\n2. "Cancel" to Exit the game`);
    if (start) {
        user = 0;
        bot = 0;

        alert(score);

    } else {
        alert(`Thanks anyways!`);
    }

})()