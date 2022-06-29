(function () {
    "use strict";

    var rank = ["A" , 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    var suit = ["hearts", "clubs", "diamonds", "spades"];
    var deck = [];
    console.log(rank[0] + 2)

    function getDeck() {
        var deck = [];

        for (var i = 0; i < suit.length; i++) {
            for (var x = 0; x < rank.length; x++) {
                var card = {Rank: rank[x], Suit: suit[i]};
                deck.push(card);
            }
        }
        return deck;
    }

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
        function shuffleCards(array) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex !== 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        deck = getDeck();
        shuffleCards(deck);
        console.log(deck);
        let userDealOut1 = deck.pop();
        console.log(userDealOut1);
        let userDealOut2 = deck.pop();
        console.log(userDealOut2);
        let botDealOut1 = deck.pop();
        console.log(botDealOut1);
        let botDealOut2 = deck.pop();
        console.log(botDealOut2);
        userHand.unshift(userDealOut1, userDealOut2);
        botHand.unshift(botDealOut1, botDealOut2);
        console.log(userHand);
        console.log(botHand);
        document.write(`Your hand is: [${userHand[0].Rank} ${userHand[0].Suit}] and [${userHand[1].Rank} ${userHand[1].Suit}] <br>`);
        document.write(`Bot hand is: [${botHand[0].Rank} ${botHand[0].Suit}] and [${botHand[1].Rank} ${botHand[1].Suit}]`);
    } else {
        alert(`Thanks anyways!`);
    }

})()