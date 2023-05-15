// import { renderTaskList } from './';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
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

export { renderTaskList };