// Complete - JavaScript I - Key Events Exercise
(function () {
    "use strict";

    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'B', 'A'];
    let current = 0;
    document.addEventListener("keyup", function (event) {
        if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
            current = -1;
            console.log(event.key);
            console.log(current);
        }
        current++;
        if (current === 10) {
            console.log(`made it`);
            let psy = document.getElementById('canvas');
            psy.style.display = 'block'
            let hide = document.getElementById('hideController');
            hide.style.display = 'none'
        }
    });

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var circles = [];
    var mX = 0;
    var mY = 0;

    function init() {
        resizeCanvas();
        setInterval(drawShape, 50);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth - 5;
        canvas.height = window.innerHeight - 5;
    }

    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        let colors = ["yellow", "orange", "olive", "blue", "pink", "lime", "cyan", "red", "purple", "black", "white"];
        var indexC = randomRange(0, colors.length);
        return colors[indexC];
    }

    function drawShape() {
        resizeCanvas();
        var circle = {
            x: mX,
            y: mY,
            xSpeed: randomRange(-10, 10),
            ySpeed: randomRange(-10, 10),
            size: 10,
            color: randomColor()
        }

        circles.push(circle);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < circles.length; i++) {
            circle = circles[i];
            ctx.beginPath();
            ctx.fillStyle = circle.color;
            ctx.arc(circle.x, circle.y, circle.size, 0 * Math.PI, Math.PI * 2);
            //ctx.stroke();
            ctx.fill();
            ctx.closePath();

            circle.y = circle.y + circle.ySpeed
            circle.x = circle.x + circle.xSpeed;

            if (circle.size < 700) {
                circle.size = circle.size * 1.2;
            }
        }
    }

    window.addEventListener("mousemove", function (event) {
        mX = event.clientX;
        mY = event.clientY;
    })

    init();

    //Simulating keyboard events (accessibility / make NES buttons)
    let fakeArrowUp = document.getElementById('fakeArrowUp')

    fakeArrowUp.addEventListener("click", arrowUp)

    function arrowUp() {
        document.dispatchEvent(fakeArrowUpEvent)
    }

    let fakeArrowUpEvent = new KeyboardEvent('keyup', {
        'key': 'ArrowUp'
    })


    let fakeArrowDown = document.getElementById('fakeArrowDown')

    fakeArrowDown.addEventListener("click", arrowDown)

    function arrowDown() {
        document.dispatchEvent(fakeArrowDownEvent)
    }

    let fakeArrowDownEvent = new KeyboardEvent('keyup', {
        'key': 'ArrowDown'
    })


    let fakeArrowLeft = document.getElementById('fakeArrowLeft')

    fakeArrowLeft.addEventListener("click", arrowLeft)

    function arrowLeft() {
        document.dispatchEvent(fakeArrowLeftEvent)
    }

    let fakeArrowLeftEvent = new KeyboardEvent('keyup', {
        'key': 'ArrowLeft'
    })


    let fakeArrowRight = document.getElementById('fakeArrowRight')

    fakeArrowRight.addEventListener("click", arrowRight)

    function arrowRight() {
        document.dispatchEvent(fakeArrowRightEvent)
    }

    let fakeArrowRightEvent = new KeyboardEvent('keyup', {
        'key': 'ArrowRight'
    })


    let fakeAkey = document.getElementById('fakeA')

    fakeAkey.addEventListener("click", Akey)

    function Akey() {
        document.dispatchEvent(fakeAEvent)
    }

    let fakeAEvent = new KeyboardEvent('keyup', {
        'key': 'A'
    })

    let fakeB = document.getElementById('fakeB')

    fakeB.addEventListener("click", B)

    function B() {
        document.dispatchEvent(fakeBEvent)
    }

    let fakeBEvent = new KeyboardEvent('keyup', {
        'key': 'B'
    })

})()