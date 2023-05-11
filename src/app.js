import './main.css';

// const taskList = document.getElementById('task-list');

const tasks = [
  { index: '', description: '', completed:'' },
  { index: '', description: '', completed:'' },
];

function renderTasks() {
  const taskList = document.getElementById('task-list');
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    const description = document.createElement('span');
    description.textContent = task.description;
    li.appendChild(description);
    taskList.appendChild(li);
  });
}

window.addEventListener('load', renderTasks);

// Create a horizontal line element
const hr = document.querySelector('.hr');
hr.innerHTML = '<hr>';
const clear = document.getElementById('clear');
clear.innerHTML = 'Clear all completed';
