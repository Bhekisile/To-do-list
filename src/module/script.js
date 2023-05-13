import './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const checkbox = document.querySelector('#myTasksList, #checkbox');

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
function checkCheckbox() {
  tasks.forEach((task) => {
    if (checkbox.checked) {
      task.completed = false;
    } else {
      task.completed = true;
    }
  });
  saveTasks();
}

checkbox.addEventListener('change', checkCheckbox);

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};
const clearCompletedTasks = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const taskContainer = checkbox.closest('.content');
      taskContainer.remove();
      const taskId = taskContainer.getAttribute('index');
      tasks = tasks.filter((task) => task.index !== taskId);
    }
  });
  saveTasks();
  updateTaskIndexes();
};

const clearAll = document.getElementById('remove');
clearAll.addEventListener('click', clearCompletedTasks);

export default './script.js';