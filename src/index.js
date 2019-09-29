document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log(todolist);
});

let input= document.getElementById("new-task-description");
let list=document.getElementById("tasks");

function todo(event){
  event.preventDefault();
  let inputval= input.value;
  let todolist=document.createElement('li');
  todolist.innerText=inputval;
  list.appendchild(todolist);
  
}

let sub= document.getElementById("btn");
document.onsubmit=todo(event);