<script setup>
    import { ref,computed } from 'vue';

    let id = 0;
    const hideCompleted = ref(false);
    const newTodo = ref('');
    const todos = ref([]);
    const input = ref('')


    const filteredTodos = computed(() => {
        return hideCompleted.value ? todos.value.filter(t => !t.done)
        : todos.value
    })
    function addTodo(){
        if(newTodo.value !== '' && newTodo.value !== null){
            todos.value.push({id:id++,text:newTodo.value,done:false})
            newTodo.value = ''
            input.value = 'write something todo'
        }else{
            input.value = 'PLEASE WRITE SOMETHING'
        }
    }
    function deleteTodo(todo){
        todos.value = todos.value.filter(t => t !== todo);
    }
</script>

<template>
    <h1>Todo</h1>
         <form @submit.prevent='addTodo' class="form">
                <input v-model="newTodo" :placeholder="input">
                <button>SUBMIT</button>
         </form>
         <ul>
            <li class ='todo' v-for="todo in filteredTodos">
                <input type ='checkbox' v-model="todo.done">
                <span :class='{completed: todo.done}'>{{todo.text}}</span>
                <button @click="deleteTodo(todo)">X</button>
            </li>
         </ul>
         <button @click="hideCompleted = !hideCompleted">
            {{hideCompleted ? 'See All' : 'Hide Completed'}}
            </button>
</template>

<style>
    h1{
        background-color: pink;
        color: purple;
        font-size: 3em;
        border: 1px solid lightcoral;
    }
    .todo{
        background-color: palevioletred;
        border: 1px solid paleturquoise;
        font-size: 2.5em;
        color:white;
        max-width: 50%;
        display: flex;
        align-items: center;
    }
    .todo > * {
        flex-grow: 1;
    }
    .completed{
        text-decoration: line-through;
        text-decoration-color: aquamarine;
    }
</style>