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

            function addTodo() {
                let todoText = document.getElementById(`add-todo-text`).value;
                todoList.innerHTML += `<div class="card col-2">
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
