// Incomplete - Javascript I - AJAX & JS Fetch APIs - Store Exercise
// TODO: Create an AJAX GET request for the file under data/inventory.json

// TODO: Take the data from inventory.json and append it to the products table
//       HINT: Your data should come back as a JSON object; use console.log() to inspect
//             its contents and fields
//       HINT: You will want to target #insertProducts for your new HTML elements
(async function () {
    "use strict";
    const tools = await fetch ("js/data/inventory.json")
    .then(async function(response){
        if (response.status !== 200){
            console.log("Cannot read tools file");
            return "";
        } else
            return await response.json();
    });

    console.log(tools);
    for (let i = 0; i < tools.length; i++) {
        console.log(tools[i]);
    }

    let tBody = document.getElementById('insertProducts');
    for (let i = 0; i < tools.length; i++) {

        var toolTable = tBody.innerHTML +=
                        `<tr>
            <td>${tools[i].title}</td>
            <td>${tools[i].quantity}</td>
            <td>${tools[i].price}</td>
            <td>${tools[i].categories}</td>
                        <tr>`
    }
    let updateBtn = document.getElementById(`updateInventory`);
    updateBtn.addEventListener("click", function (event) {
        tBody.innerHTML = ''
        tBody.innerHTML = toolTable;})
})();


// // 1. Wait for fetch to finish and grab response
// const response1 = await fetch ('url');

// // 2. Tell response to produce json data and wait for it to finish
// quote1 = await response1.json();

// // 3. Data is saved in variable
// console.log(quote1);



// // Faster process that includes response code checking
//
// quote2 = await fetch(`url`)
// .then(async function(response2){
//     if(response2.status !== 200) {
//         console.log(`error`);
//         return "";
//     } else {
//         return await response2.json();
//     }
// })
// console.log(quote2);