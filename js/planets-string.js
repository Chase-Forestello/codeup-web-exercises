// Complete - JavaScript I - Arrays - Exercise
(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let breakPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune"
    // useful to include <br> tags in this string because when it is called on a webpage
    // the breaks will be displayed.
    console.log(breakPlanets);
    let ulPlanets = "<ul></ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li>J<li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    console.log(ulPlanets);

})();