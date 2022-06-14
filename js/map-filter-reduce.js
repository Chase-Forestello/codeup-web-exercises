// Complete - JavaScript II - Map, Filter and Reduce - Exercise
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

// filtering user languages

    let filteredLanguages = users.filter(function (user) {
        return user.languages.length >= 3
    });
    console.log(filteredLanguages);

// mapping user emails

    let mappedEmails = users.map(function (user) {
        return user.email
    });
    console.log(mappedEmails);

// reducing user years of experience

    let sumExp = users.reduce(function (totalExperienceSoFar, user) {
        return totalExperienceSoFar + user.yearsOfExperience;
    }, 0);
    console.log(`Total years of experience: ${sumExp}`);
    console.log(`Average years of experience: ${sumExp / users.length}`);

// reducing user longest email

    let longestEmail = users.reduce(function (longestEmailSoFar, user) {
        if (user.email.length > longestEmailSoFar.length) {
            return user.email
        } else {
            return longestEmailSoFar;
        }
    }, "")
    console.log(`The longest email is: ${longestEmail}`);

// reducing list of user names to single string

    let userNames = users.reduce(function (userNamesSoFar, user) {
        return userNamesSoFar + user.name + ", ";
    }, "")
    console.log(userNames.substring(userNames.length - 2, 0));

// bonus unique list of languages using reduce

    let uniqueLanguages = users.reduce(function (setOfUniqueLanguagesSoFar, user) {
        for (let language of user.languages) {
            setOfUniqueLanguagesSoFar.add(language)
        }
        return setOfUniqueLanguagesSoFar;
    }, new Set());
    console.log(uniqueLanguages);

})();