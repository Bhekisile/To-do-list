import '../style.css';
import { renderTaskList, createTaskLists } from './index.js';

const taskList = document.getElementById('task-list');
const newTask = document.getElementById('new-task');
const form = document.querySelector('form');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addNewTask(description) {
  const taskIndex = tasks.length;

  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const listItemElement = createTaskLists(task);
  taskList.appendChild(listItemElement);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }
  addNewTask(taskDescription);
  newTask.value = '';
});

renderTaskList();
window.addEventListener('load', renderTaskList);