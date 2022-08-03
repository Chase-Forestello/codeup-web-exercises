// Complete - JavaScript I - DOM Add & Remove
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {


        // Array for generating random bg colors

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


        // Add card function

        let todoList = document.getElementById(`my-todos`);
        let addBtn = document.getElementById(`add-todo`);
        addBtn.addEventListener('click', addTodo)
        let list = document.querySelector(`#my-todos`)
        let listLength = document.querySelector(`.card-body`);

        function addTodo() {
            let todoText = document.getElementById(`add-todo-text`).value;
            console.log(todoText.trim().length);
            if (todoText.trim().length < 1) {
                //validation incomplete
            }
            todoList.innerHTML += `<div class="card col-2" style="background-color: ${bgColorArray[Math.floor(Math.random() * bgColorArray.length)]}">
                                            <div class="card-body">
                                            ${todoText}
                                             </div>
                                             <div class="card-footer">
                                                <button class="delete-todo">Delete Todo</button>
                                             </div>
                                        </div>`
            for (let i = 0; i < deleteBtn.length; i++) {

                deleteBtn[i].addEventListener("click", deleteTodo);
            }
            console.log(listLength);
            if (listLength > 10) {
                alert("Try making a to-done first");
            }
        }


        // Delete card function



        let deleteBtn = document.getElementsByClassName(`delete-todo`);
        deleteBtn[0].addEventListener("click", deleteTodo);

        function deleteTodo(event) {
            let deleteThis = event.target.parentElement.parentElement;
            console.log(deleteThis);
            list.removeChild(deleteThis)
        }




        let editBtn = document.getElementsByClassName(`edit-todo`)
        console.log(editBtn);{
            editBtn[0].addEventListener('click', editThis )
        }
        function editThis (event) {
            let editThis = event.target.parentElement.previousElementSibling;
            let cardFooter = event.target.parentElement;
            console.log(editThis);
            editBtn[0].outerHTML = '<div id="editTemp" style="width: 8em"><label for="editBox">Edit:</label>\n' +
                '  <input type="text" id="editBox" name="editBox" style="width: 100%"><br><br>\n' +
                '  <input id="editSubmit" type="submit" value="Submit" style="width: 100%"></div>';
            let editValue = document.getElementById(`editBox`)
            console.log(editValue);
            let editValueSubmit = document.getElementById(`editSubmit`);
            editValueSubmit.addEventListener("click", function(event){
                let todoEdit = document.getElementById(`editBox`).value;
                console.log(todoEdit);
                editThis.innerHTML = editValue.value;
                let editTempDiv = document.getElementById(`editTemp`);
                editTempDiv.outerHTML = `<button class="edit-todo" style="width: 100%">Edit Todo</button>`

            })


        }
    });
})();
