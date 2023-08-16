const inputTask = document.querySelector(".input-task");
const btnAddTask = document.querySelector(".btn-add-task");
const tasks = document.querySelector(".tasks");

btnAddTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("clear-button")) {
    el.parentElement.remove();
  }
  saveTasks();
});

const createTask = (inputText) => {
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
  clearInput();
  createClearButton(li);
  saveTasks();
};

const createClearButton = (li) => {
  li.innerHTML += " ";
  const clearButton = document.createElement("button");
  clearButton.innerHTML = "Apagar";
  clearButton.setAttribute("class", "clear-button");
  li.appendChild(clearButton);
};

const clearInput = () => {
  inputTask.value = "";
  inputTask.focus();
};

const createLi = () => {
  const li = document.createElement("li");
  return li;
};

const saveTasks = () => {
  const tasksLi = tasks.querySelectorAll("li");
  const listOfTasks = [];
  for (let task of tasksLi) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "").trim();
    listOfTasks.push(taskText);
  }
  const tasksJSON = JSON.stringify(listOfTasks);
  localStorage.setItem("tasks", tasksJSON);
};

const addSavedTasks = () => {
  const tasks = localStorage.getItem("tasks");
  const listOfTasks = JSON.parse(tasks);
  for (let task of listOfTasks) {
    createTask(task);
  }
};
addSavedTasks();
