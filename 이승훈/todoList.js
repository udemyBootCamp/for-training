const body = document.querySelector("body");

const form = document.createElement("form");
const todoList = document.createElement("ul");

body.append(form, todoList);

const inputTodo = document.createElement("input");
inputTodo.setAttribute("class", "todo");
inputTodo.setAttribute("type", "text");

function makeTodoList(todo) {
  const todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todoItem");
  const todoText = document.createElement("div");
  todoText.innerText = `${todo}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });
  deleteBtn.setAttribute("class", "deleteBtn");

  todoItem.append(todoText, deleteBtn);
  todoList.appendChild(todoItem);
  inputTodo.value = null;
}

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "추가");
submitBtn.setAttribute("class", "submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  makeTodoList(inputTodo.value);
});

form.append(inputTodo, submitBtn);
