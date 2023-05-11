import './main.css';

const taskList = document.getElementById('task-list');

const tasks = [
  { index: 1, description: 'wash the dishes', completed: false},
  { index: 2, description: 'complete To Do list project', completed: true},
];

function renderTasks() {
  const taskList = document.getElementById("task-list");
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    const description = document.createElement("span");
    description.textContent = task.description;
    li.appendChild(description);
    taskList.appendChild(li);
  });
}

window.addEventListener("load", renderTasks);

const createCheckbox = () => {
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  return taskCheckbox;
};

// Create a horizontal line element
const hr = document.querySelector('.hr');
hr.innerHTML = '<hr>';
const clear = document.getElementById('clear');
clear.innerHTML = 'Clear all completed';
