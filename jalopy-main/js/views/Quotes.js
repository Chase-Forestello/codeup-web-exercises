// Complete - Jalopy - Adding API calls to a Jalopy App
// const quotes = [
//     {Quote: "War is organized murder and torture against our brothers.", Author: "Alfred Adler"},
//
//     {Quote: "Follow sound business trends, not fashion trends.", Author: "Janice Dickinson"},
//
//     {Quote: "I'm sure we, the American people, are the butt of jokes by those in power.", Author: "Alice Walker"},
//
//     {Quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.", Author: "Adnan Pachachi"},
//
//     {Quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.", Author: "John F. Kennedy"},
//
//     {Quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.", Author: "Harvey Fierstein"},
//
//     {Quote: "I think God's justice is making wrongs right.", Author: "Joel Osteen"},
//
//     {Quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.", Author: "H. L. Mencken"},
//
//     {Quote: "If science fiction is the mythology of modern technology, then its myth is tragic.", Author: "Ursula K. Le Guin"},
//
//     {Quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.", Author: "Lucy Liu"}
// ]
export default function QuotesHTMLFunction(props) {
    return `
    <div id="QuotesPage">
    <h1>Quotes!</h1>
    ${makeQuoteCards(props.quotes)}
</div> `;
}

function makeQuoteCards (quotes){
    let html = "";
    quotes.forEach(function(quote) {
        html += makeQuoteCard(quote);
    });
    return html;
}

function makeQuoteCard (quote) {
    return `
    <div class="quoteCards card">
        <div class="card-body">
            <p class="text-center" style="margin-bottom: 0">"${quote.quote}"</p> <br> -${quote.author}
        </div>
    </div>
    `
}










// JSFunction will go unused unless there is a need
// to add event listeners or other JS elements.
export function QuotesJSFunction() {
    // let quotesDiv = document.getElementById(`myQuotesPage`);
    //
    // function addQuote() {
    //     for (let i = 0; i < quotes.length; i++) {
    //
    //         quotesDiv.innerHTML += `<div class=" quoteCards card"><blockquote <p class="text-center">"${quotes[i].Quote}"</p></blockquote> <figcaption class="text-center">- ${quotes[i].Author}</figcaption></div>`
    //     }
    // }
    // addQuote();
}