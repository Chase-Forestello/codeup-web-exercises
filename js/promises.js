// Complete - JavaScript II - Promises Exercise
(async function () {
    "use strict";
    const options = {
        method: 'GET',
        headers: {
    'Authorization': GITHUB_API_KEY

        }
    };


    function githubUsers(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, options)
            .then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.log(`Error: error`);
            })
    }

    // Refactor is use a fori loop to check if first index event type is actually a push event or not
    // to ensure pulling the first push event (which may not be indexed 0).
    const user = `Chase-Forestello`
    const users = await githubUsers(user);
    console.log(users);
    let lastCommitTimeToLocalTime = new Date(users[0].created_at).toLocaleString();
    console.log(`Date and time of last commit by ${user}: ${lastCommitTimeToLocalTime}`);

    function wait (delay){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (delay > 999 ) {
                    resolve();
                } else {
                    reject();
                }
            }, delay);
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    let clientLocalTime = new Date().toLocaleString();

    console.log(`The local date/time on this OS is: ${clientLocalTime}`);


    await fetch("js/data/promiseData.json")
        .then(async function (response) {
            if (response.status !== 200) {
                console.log("Cannot read tools file");
                return "";
            } else
                return await response.json();
        });
    let LOCALDATAlastCommitTimeToLocalTime = new Date(users[0].created_at).toLocaleString();
    console.log(`Date and time of last commit by ${user} (from local json data): ${LOCALDATAlastCommitTimeToLocalTime}`);
})();

// 14:26



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