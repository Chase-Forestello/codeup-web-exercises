// Incomplete - JavaScript II - Promises Exercise
(async function () {
    "use strict";


    function githubUsers(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_API_KEY}})
            .then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.log(error);
            })
    }

    const users = await githubUsers(`Chase-Forestello`);
    console.log(`Last commit at: ${users[0].created_at}`);


})();



// fetch('https://api.github.com/users')
//         .then(function (response){
//             if(response.status !== 200){
//                 return Promise.reject(`Status was: ${response.status}`);
//             }
//             return response.json();
//         }).then(function (users) {
//         console.log(users);
//     }).catch(function (error){
//         console.log(error);
//     }).finally(function (){
//         console.log("This always executes");
//     })
//
//
//     // condensed version still catches error
//
//     function getGitHubUsernames() {
//         return fetch('https://api.github.com/users')
//             .then(response => response.json())
//             .catch(function (error){
//                 console.log(error);
//             });
//     }
//
//     const users = await getGitHubUsernames()
//     console.log(users);