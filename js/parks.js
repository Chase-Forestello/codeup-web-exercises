// Complete - JavaScript I - DOM Traversal
(function () {
    "use strict";

    const myToggle = document.querySelector('#inviso-toggle');
    myToggle.addEventListener("click", function (event) {
        const myDDs = document.querySelectorAll('dd');
        myDDs.forEach(function (dd) {

            dd.classList.toggle('invisible');
        })
    })
    let h3s = document.querySelectorAll(`h3`);
    h3s.forEach(function(li){
        li.addEventListener("click", function(event){
            this.nextElementSibling.classList.toggle(`li-bold`)
        })
    })

    const myDTs = document.querySelectorAll('dt');
    myDTs.forEach(function(dt) {
        dt.addEventListener("click", function (event){
            this.classList.toggle('orange-bg')
        })
    })

    let yellowToggle = document.getElementById('yellowBg');
    yellowToggle.addEventListener("click", yellowBg);
    let parkLIs = document.getElementsByTagName('ul');
    console.log(parkLIs);
    function yellowBg () {
        for (let i = 0; i < parkLIs.length; i++) {
            parkLIs[i].lastElementChild.classList.toggle(`yellow-bg`)
        }
    }

    const parksUL = document.getElementsByClassName(`list`);
    for (let i = 0; i < parksUL.length; i++) {
        parksUL[i].addEventListener("click", function (event){
            this.firstElementChild.classList.toggle(`blue-text`)
        })
    }
    var pic1 = document.getElementById('mountains');
    var pic2 = document.getElementById('bird');
    let pic3 = document.getElementById('lake');
    let swapBtn1 = document.getElementById(`btn1`);
    let swapBtn2 = document.getElementById(`btn2`)
    let swapBtn3 = document.getElementById(`btn3`);
    let pic3to2Traverse = pic3.parentElement.parentElement.previousElementSibling.childNodes[1].firstChild.nextSibling;
    swapBtn1.addEventListener("click", function (event){
        const holdPic1 = pic1.src;
        pic1.src = pic2.src;
        pic2.src = holdPic1;
    })

    swapBtn2.addEventListener("click", function (event){
        let randomPics = [`${pic1.src}`, `${pic3.src}`];
        pic2.src = randomPics[Math.floor(Math.random() * randomPics.length)]
    })

    swapBtn3.addEventListener('click', function (event) {
        const holdPic3 = pic3.src;
        pic3.src = pic2.src
        pic3to2Traverse.src = holdPic3;
    })
})();