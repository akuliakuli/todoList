<script setup>
  import { ref } from 'vue';

  const modal = ref(false)
  const firstElem = ref(false);
  const secondElem = ref(false);

  function showFirstElement(){
    firstElem.value = true;
    secondElem.value = false;
  }
  showFirstElement()
  function showSecondElement(){
    firstElem.value = false;
    secondElem.value = true;
  }
  function hideModal(){
    modal.value = false;
  }
  function showModal(){
    modal.value = true;
  }
</script>

<template>
    <div class="container">
        <div class="modal" v-if="modal">
                <form @submit.prevent="" action="" class="modal_content_form">
                    <button class ='modal_btn'  @click ='modal = false'>X</button>
                    <h1 class ='modal_content_header'>write something that needs to be done</h1>
                    <input type ='text' placeholder="one step for man one giant leap for mankind" class ='modal_content_input'>
                    <button class ='modal_content_btn'>SUBMIT</button>                    
                </form>
        </div>
        <div class="todo_box">
            <div class="todo_header">
                <div class="todo_header_item" @click="showFirstElement" :class ="{ active: firstElem}">
                    <img src ='/menu.png' class="todo_img" >
                </div>
                <div class="todo_header_item " @click="showSecondElement" :class ="{ active: secondElem}">
                    <img src ='/calendar.png' class ='todo_img'>
                </div>
            </div>
            <ul class ='todo_items' v-if="firstElem">
                <li class ='todo_item'>
                    <input type ='checkbox' class ='todo_checkbox'>
                    <span class ='todo_text'>SOMETHING</span>
                    <button class ='todo_btn'>X</button>
                </li>
            </ul>
            <div class="button" @click="modal = true" v-if="firstElem">
                +
            </div>
        </div>
    </div>
</template>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
        height: 100vh;
    }
    
    .todo_box{
        background-color: #fafafa;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
    }
    .todo_header{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .todo_header_item{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
        border: 1px solid gainsboro;
        background-color: lightgray;
        cursor: pointer;
    }
    .todo_img{
        margin: 0 auto;
        max-width: 60px;
        max-height: 60px;
    }
    .todo_items{
        margin-top: 3em;
    }
    .todo_item{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .todo_checkbox{
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid royalblue;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
    }
    .todo_text{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5em;
        height: 30px;
    }
    .todo_btn{
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
    .todo_btn:hover{
        border: 1px solid royalblue;
    }
    .active{
        background-color: #fafafa;
    }
    .button{
        align-self: center;
        border-radius: 100%;
        background-color: #F7D002;
        cursor: pointer;
        color: white;
        text-align: center;
        font-size: 3em;
        padding: 5px;
        width: 50px;
        height: 50px;
    }
    .modal_content_btn{
        background-color: #F7D002;
        border: none;
        padding: 10px;
        font-size: 1.3em;
        cursor: pointer;
        color: white;
        border-radius: 5px;
    }
    .modal{
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4); 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .modal_content_form{
        background-color: #fafafa;
        height: 20%;
        gap: 10px;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .modal_content_header{
        font-size: 1.2em;
        text-transform:uppercase;
        border-bottom: 2px solid rebeccapurple;
    }
    .modal_content_input{
        width: 50%;
        padding: 5px;
        font-size: 0.8em;
    }
    .modal_btn{
        align-self: flex-end;
        background-color: purple;
        color: white;
        margin-right: 10px;
    }

    .hide{
        display: none;
    }
    .show{
        display: flex;
    }
</style>