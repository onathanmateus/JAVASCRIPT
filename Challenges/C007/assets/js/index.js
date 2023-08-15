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
});

const createTask = (inputText) => {
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
  clearInput();
  createClearButton(li);
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
