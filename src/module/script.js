import {displayTask, addTask} from './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const checkbox = document.querySelector('#myTasksList, #checkbox');

function checkCheckbox() {
    tasks.forEach((task) => {
        if (checkbox.checked) {
            task.completed = false;
            console.log('task is incomplete');
        } else {
            task.completed = true;
            console.log('task is complete');
        }
    })
    saveTasks();
}

checkbox.addEventListener('change', checkCheckbox);

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const clearCompletedTasks = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        const taskContainer = checkbox.closest('.content');
        taskContainer.remove();
        const taskId = taskContainer.getAttribute('index');
        tasks = tasks.filter(task => task.index !== taskId);
      }
    });
    saveTasks();
    updateTaskIndexes();
  };

  const clearAll = document.getElementById('remove');
  clearAll.addEventListener('click', clearCompletedTasks);
    
  const updateTaskIndexes = () => {
    tasks.forEach((task, index) => {
      task.index = index;
    });
  };

export {saveTasks} from './script.js';