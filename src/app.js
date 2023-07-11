import './index.css';

const tasks = [
  { index: 1, description: 'Wash the dishes', completed: true },
  { index: 2, description: 'Complete To Do list project 2', completed: false },
];

function renderTasks() {
  const taskList = document.getElementById('task-list');
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
                <input type='checkbox'>
                <span>${task.description}</span>
                <i class="fa fa-ellipsis-v"></i>
    `;
    taskList.appendChild(li);
  });
}

window.addEventListener('load', renderTasks);

const clear = document.getElementById('clear');
clear.innerHTML = 'Clear all completed';