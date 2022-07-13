
class TodoListDB{
    constructor(todoForm,todoInput,todoList,todoCount){
        this.todoForm = document.querySelector(todoForm),
        this.todoInput = document.querySelector(todoInput),
        this.todoList = document.querySelector(todoList);
        this.todoCount = document.querySelector(todoCount)
        this.arr = [];
    }
} 

class getInfo extends TodoListDB{
    getUserInfo(value){
        let b = value;
        this.arr.push({text:b,checked:false});
    }
}
class Display extends getInfo{
    render(){
        this.todoList.innerHTML = "";
        this.arr.forEach(item => {
            this.todoList.innerHTML += `
                <li class="todo-item">
                <input type ="checkbox" class ="done-todo">
                ${item.text}
                <button class= "todo-submit delete-todo">&#10006;</button>
                </li>`
        })
    }
}
class Delete extends Display{
    deleteElem(){
        this.todoList.addEventListener("click", (e) => {
            if(e.target && e.target.matches(".delete-todo")){
                e.target.parentElement.remove()
                     this.arr = this.arr.filter(item => {
                         if(!item.value == e.target.parentElement.textContent){
                            return item
                     }
               })

               this.count()
            }        
        })
    }
    count(){
        if(this.arr.length == 0 || this.arr.length < 0){
            this.todoCount.textContent = `COUNT :${0}`
        }else{
            this.todoCount.textContent = `COUNT :${this.arr.length}`
        }
    }
}
class DisplayOnPage extends Delete{
    showPage(){
        this.todoForm.addEventListener("submit", (e) => {
            e.preventDefault()
            if(this.todoInput.value !== '' && this.todoInput.value !== null){
                this.getUserInfo(this.todoInput.value)
                this.arr.sort();
                this.render();
                this.count()
                this.todoInput.placeholder = "";
            }else{
                this.todoInput.placeholder = "Please write something";
            }
            e.target.reset()

        })
    }
}

let b = new DisplayOnPage(".todo-list-form",".todo-input",".todo-list",".todo-list-title");
b.showPage()
b.deleteElem()
b.count()