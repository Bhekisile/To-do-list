import './style.css';
// import './module/index.js';
import './module/script.js';
// import { createTaskLists } from './module/index.js';

const taskList = document.getElementById('task-list');
const newTask = document.getElementById('new-task');
const form = document.querySelector('form');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const renderTaskList = () => {
  taskList.innerHTML = '';

  tasks
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemElement = createTaskLists(task);
      taskList.appendChild(listItemElement);
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }

  function addNewTask(description) {
    const taskIndex = tasks.length;

    const task = { description, completed: false, index: taskIndex };
    tasks.push(task);
    saveTasks();

    const listItemElement = createTaskLists(task);
    taskList.appendChild(listItemElement);
  }

  addNewTask(taskDescription);
  newTask.value = '';
});

renderTaskList();
window.addEventListener('load', renderTaskList);