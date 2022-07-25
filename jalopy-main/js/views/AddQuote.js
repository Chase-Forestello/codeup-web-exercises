// Complete - Jalopy - Inserting Data into an API
import createView from "../createView.js"
import {showNotification} from "../messaging.js";

export default function AddQuoteHTMLFunction(props) {
    return `
<form class="container">
    <h1 id="newQuoteHeader">New Quote</h1>
    <form>
        <label for="quoteText" class="form-label">Quote:</label>
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a new quote">
        <label for="quoteTextAuthor" class="form-label">Author:</label>
        <input class="form-control" list="datalistOptions" id="quoteTextAuthor" placeholder="Enter author">
        <button class="form-control btn insert-btn" id="insert-quote-btn">Insert Quote</button>
    </form>
</div>
`;
}


export function AddQuoteJSFunction() {
    const insertQuoteBtn = document.querySelector("#insert-quote-btn");
    insertQuoteBtn.addEventListener("click", addQuote)}

function addQuote() {
    // make sure user entered something non-blank for the quote
    const quoteInput = document.querySelector("#quoteText");
    const quoteAuthor = document.querySelector("#quoteTextAuthor")
    const quote = quoteInput.value.trim();
    let author = quoteAuthor.value.trim();
    if(quote.length < 1) {
        alert(`Quote cannot be blank!`);
        console.log("Quote cannot be blank!");
        return;
    }
    const newQuote = {
        quote: quote,
        author: author
    };

    if(author.length < 1) {
        newQuote.author = "Anonymous"
    }

    console.log("Quote is ready to be inserted");
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JALOPY_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://quotes.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                console.log("add quote error: " + response.status);
            } else {
                console.log("add quote ok");
                createView("/quotes");
            }
        });
}