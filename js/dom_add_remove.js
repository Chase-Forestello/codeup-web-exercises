// Incomplete - JavaScript I - DOM Add & Remove
(function () {
    "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            // add your code here
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
                let deleteBtn = document.querySelectorAll(`.delete-todo`)
                console.log(deleteBtn);
                // reference to button
                // need reference to card containing button to know which card to remove
            }




            function deleteTodo(event) {
                document.querySelector(`#my-todos`).firstChild
                console.log(event.target);
            }
        });
})();
