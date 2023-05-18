import './style.css';
import createTask from '../module/createTask.js';

const taskList = document.getElementById('task-list');
const newTask = document.getElementById('new-task');
const clearCompleted = document.querySelector('#clear-all');
const form = document.querySelector('form');

let deleteTask;
let editTasks;

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function markAsCompleted(task) {
  task.completed = true;
}

function markAsIncomplete(task) {
  task.completed = false;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

function renderTasks() {
  if (taskList !== null) {
    taskList.innerHTML = '';

    tasks
      .sort((task1, task2) => task1.index - task2.index)
      .forEach((task) => {
        const listItemElement = createTask(
          task,
          markAsCompleted,
          markAsIncomplete,
          saveTasks,
          deleteTask,
          editTasks,
        );
        taskList.appendChild(listItemElement);
      });
  }
}

deleteTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  updateIndexes();
  saveTasks();
  renderTasks();
};

function addNewTask(description) {
  const taskIndex = tasks.length;
  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  saveTasks();

  if (taskList) {
    const listItemElement = createTask(
      task,
      markAsCompleted,
      markAsIncomplete,
      saveTasks,
      deleteTask,
      editTasks,
    );
    taskList.appendChild(listItemElement);
  }
}

function clearCompletedTasks() {
  const completedIndexes = [];

  tasks.forEach((task, index) => {
    if (task.completed) {
      completedIndexes.push(index);
    }
  });

  completedIndexes.reverse().forEach((index) => {
    tasks.splice(index, 1);
  });

  updateIndexes();
  saveTasks();
  renderTasks();
}

export default editTasks = (task) => {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = task.description;
  inputElement.classList.add('edit-input');

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      task.description = inputElement.value.trim();
      saveTasks();
      renderTasks();
    } else if (event.key === 'Escape') {
      renderTasks();
    }
  });

  const listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
};

function handleClearCompletedClick(event) {
  event.preventDefault();
  clearCompletedTasks();
}

function handleFormSubmit(event) {
  event.preventDefault();

  const taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }

  addNewTask(taskDescription);
  newTask.value = '';
}

if (clearCompleted) {
  clearCompleted.addEventListener('click', handleClearCompletedClick);
}

if (form) {
  form.addEventListener('submit', handleFormSubmit);
}

renderTasks();
window.addEventListener('load', renderTasks);

export { markAsCompleted, markAsIncomplete, saveTasks };