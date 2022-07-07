// Incomplete - JavaScript I - DOM Traversal
(function () {
    "use strict";

    let btn1 = document.getElementById('yellowBg');
    btn1.addEventListener("click", yellowBg);
    let parkLIs = document.getElementsByTagName('ul');
    console.log(parkLIs);

    function yellowBg () {
        for (let i = 0; i < parkLIs.length; i++) {
            parkLIs[i].lastElementChild.style.backgroundColor = 'yellow'
        }
    }

    let parks = document.getElementById('canyonlands');
    parks.addEventListener("click", h3Bold)
    function h3Bold () {
        parks.nextElementSibling.style.fontWeight = 'bold';
    }
})();