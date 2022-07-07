// Incomplete - JavaScript I - DOM Traversal
(function () {
    "use strict";

    let btn1 = document.getElementById('yellowBg');
    btn1.addEventListener("click", yellowBg);
    let parkLIs = document.getElementsByTagName('ul');
    function yellowBg () {
        for (let i = 0; i < parkLIs.length; i++) {
            parkLIs[i].lastElementChild.style.backgroundColor = 'yellow'
        }
    }

})();