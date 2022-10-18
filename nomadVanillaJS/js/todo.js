const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos=[];

function saveTodos(todos){
  localStorage.setItem("todos",JSON.stringify(todos));
}

function paintTodo(newTodoObj){
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");


  newLi.append(newSpan);
  newLi.id=newTodoObj.id;
  newSpan.innerText = newTodoObj.text;

  newButton.innerText="X";
  newButton.addEventListener("click",deleteTodo);
  newLi.append(newButton);

  todoList.append(newLi);
}

function onsubmitTodo(event){
  event.preventDefault();
  const newTodoObj = {
    "text" : todoInput.value,
    "id" : Date.now(),
  };
    
  todoInput.value="";
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos(todos);
}

function deleteTodo(event){
  const deleteId =  event.target.parentNode.id;
  event.target.parentNode.remove();
   
  todos=  todos.filter( obj => {
    return obj.id!==parseInt(deleteId);
  });
  saveTodos(todos)
 
  console.log(todos);
}

todoForm.addEventListener("submit",onsubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
  // load local
  const parsedTodo = JSON.parse(savedTodos);
  todos=parsedTodo; 
  parsedTodo.forEach(paintTodo);
}
else {
  
}