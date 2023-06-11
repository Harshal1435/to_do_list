document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo();
  });
  
  function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
  
    if (todoInput.value === "") {
      return;
    }
  
    var listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = todoInput.value;
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });
  
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  
    todoInput.value = "";
  }
  
  