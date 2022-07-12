let todoForm = document.querySelector(".todo-list-form"),
    todoInput = document.querySelector('.todo-input'),
    todoList = document.querySelector(".todo-list");

let arr = []
function getInfo(value){
    let b;
    if(value !== '' || value !== null){
        b = value;
    }else{
        alert("Please write something")
    }
    arr.push({text:value,checked:false});
}

function render(){
    todoList.innerHTML = ""
    arr.forEach(item => {
        todoList.innerHTML += `
        <li class="todo-item">
        <input type ="checkbox" class ="done-todo">
        ${item.text}
        <button class= "todo-submit delete-todo">&#10006;</button>
        </li>
    `
    })
    arr.sort()
}
function deleteTodo(){
    todoList.addEventListener("click", (e) => {
        if(e.target && e.target.closest(".delete-todo")){
            e.target.parentElement.remove()
            console.log(todoList.indexOf(e.target))
        }
    })
}
deleteTodo()
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(todoInput.value !== "" && todoInput.value !== 0){
        getInfo(todoInput.value)
        render()
        todoInput.placeholder = ""
    }else{
        todoInput.placeholder = "Please write something"
    }
    todoInput.placeholder = ""
    e.target.reset()
})
