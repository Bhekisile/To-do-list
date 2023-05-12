import {displayTask, addTask} from './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const checkbox = document.querySelector('#myTasksList, #checkbox');

function checkCheckbox() {
    tasks.forEach((task) => {
        if (checkbox.unchecked) {
            task.completed = false;
            console.log('task is incomplete');
        } else {
            task.completed = true;
            console.log('task is complete');
        }
    })
    saveTasks();
}

checkbox.addEventListener('click', checkCheckbox);

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const clearCompletedTasks = () => {
    // tasks = tasks.filter((task) => !task.completed);
    // updateTaskIndexes();
    // saveTasks();
    // // renderTaskList();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const content = document.querySelector('.content');
    checkboxes.forEach(function (checkbox) {
       if (checkbox.checked = false) {
        content.parentNode.removeChild(content); 
       }
    });
  };

  const clearAll = document.getElementById('remove');
  clearAll.addEventListener('click', clearCompletedTasks);
    
  const updateTaskIndexes = () => {
    tasks.forEach((task, index) => {
      task.index = index;
    });
  };

//   const renderTaskList = () => {
//     taskList.innerHTML = '';
//   }

export {saveTasks} from './script.js';