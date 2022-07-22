import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function HomeHTMLFunction(props) {
    return `
        <header>
            <h1 class="text-center">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img id="jalopyImg" src="assets/jalopy1.jpeg" alt="Jalopy">
                <p class="text-center">
                    Welcome to my Jalopy application!
                </p>  
                <button id="img-button" type="button">Sloppy Jalopy</button>
            </div>
        </main>
    `;
}

let jalopyIndex = 0;
let jalopyImageList = ["assets/jalopy1.jpeg", "assets/jalopy2.jpeg", "assets/jalopy3.jpeg"];

function cycleJalopy () {
    jalopyIndex ++;
    let jalopyImg = document.getElementById("jalopyImg");
        if (jalopyIndex === jalopyImageList.length) {
            jalopyImg.src = jalopyImageList[0];
            jalopyIndex = 0;
        } else {
            console.log(jalopyIndex);
            jalopyImg.src = jalopyImageList[jalopyIndex];
        }
    }

export function HomeJSFunction() {
    document.querySelector(`#img-button`).addEventListener("click", cycleJalopy);

    // const authority = getUserRole();
}

// Condensed version from Doc Rob with everything inside of the homeJSFunction
// versus defining the function before the page JSFuction.
// export function homeJSFunction() {
//     const button = document.querySelector("#img-button");
//     button.addEventListener("click", function(event) {
//         const img = document.querySelector("#jalopyImg");
//         img.setAttribute("src", jalopyImageList[jalopyIndex]);
//         jalopyIndex++;
//         if(jalopyIndex === 3) {
//             jalopyIndex = 0;
//         }
//     });
// }