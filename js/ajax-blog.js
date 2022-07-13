// Complete - Javascript I - AJAX & JS Fetch APIs - Blog Exercise
(async function () {
    "use strict";
    const blogPosts = await fetch("js/data/blog.json")
        .then(async function (response) {
            if (response.status !== 200) {
                console.log("Cannot read tools file");
                return "";
            } else
                return await response.json();
        });
    console.log(blogPosts);
    let postRow = document.getElementById(`postRow`);
    console.log(postRow);
    console.log(blogPosts.length);
    console.log(blogPosts[0].title);
    for (let i = 0; i < blogPosts.length; i++) {
        postRow.innerHTML += `<div class="col-7">
                    <div id="posts" class="card mt-3 text-center">
                        <div class="card-header">
                            <span>${blogPosts[i].title}</span>
                        </div>
                        <div class="card-body">
                            <p>${blogPosts[i].content}</p>
                            <hr>
                            <div>
                            <span id="categories" class="text-muted">Topics: ${blogPosts[i].categories}</span>
                            <span id="date" class="text-muted">Date: ${blogPosts[i].date}</span>
                            <div>
                        </div>
                    </div>
                </div>`;
    }
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
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
            let hide = document.getElementById('hideBlog');
            hide.style.display = 'none'
            setTimeout(timeout, 3000);
            function timeout () {
                addEventListener("click", function (event){
                    location.reload();
                })
                addEventListener("keypress", function(event){
                    location.reload();
                })
            }
        }
    });


    // Konami code
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
})();
