// Incomplete - JavaScript II - Map, Filter and Reduce - Exercise
(function () {
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //Works but is logging empty arrays
    /*for (let i = 0; i < users.length; i++) {
        let x = users[i].languages;
        let filteredLanguages = x.filter((value, index, array) => array.length >= 3);
        console.log(filteredLanguages);
    }
    */
/*
    {
        let i = 0;
        let MappedEmails = users.map(n => users[i++].email)
        console.log(MappedEmails);
    }

    let experience = users.reduce((previousValue, currentValue) => {
        console.log(users[1].yearsOfExperience);
        let i = 0
        return previousValue.yearsOfExperience + currentValue.yearsOfExperience;
    }, 0);
    console.log(experience);
*/
    // returning NaN. Trying to perform math operation on something that is not
    // a number, but what? When calling the properties by index it works in individual
    // logs...

    let test = users.reduce((accumulation, currentValue) => accumulation.yearsOfExperience + currentValue.yearsOfExperience);
    console.log(test);

})();
