// Complete - Jalopy - Adding a Jalopy Screen
export default function DogFactsHTMLFunction(props) {
    return `
<div id="dogFactsPage">
    <h1 class="text-center">Dog Facts</h1>
    <div class="dogCards card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">Humans generally see better than dogs, but dogs see much better when there is low-light.</p>
        </div>
    </div>
    <div class="dogCards card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.</p>
        </div>
    </div>
    <div class="dogCards card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.</p>
        </div>
    </div>
    <div>
    <button class="form-control" id="show-fact-btn">Show Facts</button>
    </div>
</div>
`;
}
export function DogFactsJSFunction() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}