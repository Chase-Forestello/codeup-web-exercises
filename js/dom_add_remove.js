// Incomplete - JavaScript I - DOM Add & Remove
(function () {
    "use strict";

        document.addEventListener("DOMContentLoaded", function () {
            // add your code here
        let deleteBtn = document.getElementsByClassName(`delete-todo`);
        deleteBtn[0].addEventListener("click", deleteTodo);
        let todoList = document.getElementById(`my-todos`);
        let addBtn = document.getElementById(`add-todo`);
        addBtn.addEventListener('click', addTodo)
            var randomBgColor;

            var bgColorArray = [
                "forestgreen",
                "cadetblue",
                "indianred",
                "aqua",
                "aquamarine",
                "Azure",
                "chartreuse",
                "ghostwhite",
                "khaki",
                "steelblue"
            ];


            function cardBg () {
                randomBgColor = bgColorArray[Math.floor(Math.random()*bgColorArray.length)];
                console.log(randomBgColor);
            }
            cardBg();

            function addTodo() {
                let todoText = document.getElementById(`add-todo-text`).value;
                function cardBg () {
                    var randomBgColor = bgColorArray[Math.floor(Math.random()*bgColorArray.length)];
                    console.log(randomBgColor);
                }
                todoList.innerHTML += `<div class="card col-2" style="background-color: ${bgColorArray[Math.floor(Math.random()*bgColorArray.length)]}">
                                            <div class="card-body">
                                            ${todoText}
                                             </div>
                                             <div class="card-footer">
                                                <button class="delete-todo">Delete Todo</button>
                                             </div>
                                        </div>`
                for (let i = 0; i <deleteBtn.length ; i++) {

                deleteBtn[i].addEventListener("click", deleteTodo);
                }
            }

            function deleteTodo(event) {
                let list = document.querySelector(`#my-todos`)
                let deletethis = event.target.parentElement.parentElement;
                console.log(deletethis);
                list.removeChild(deletethis)
            }
        });
})();
