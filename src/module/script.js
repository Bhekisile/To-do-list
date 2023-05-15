import { updateTaskIndexes, renderTaskList } from './index.js';

// const taskList = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clearing completed
const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};

const clearCompleted = document.querySelector('a');
clearCompleted.addEventListener('click', (event) => {
  event.preventDefault();
  clearCompletedTasks();
});