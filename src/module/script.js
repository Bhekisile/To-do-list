import { displayTask } from './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const checkbox = document.querySelector('#myTasksList, #checkbox');

const completedTasks = () => {
  const uncompletedTodos = tasks.filter((element) => element.completed !== true);
  tasks = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // loadTasks(newTask);
};

const checkCheckbox = ({ index, status }) => {
  tasks[index - 1].completed = status;
  displayTask();
  completedTasks();
};

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
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateTaskIndexes();
};

const clearAll = document.getElementById('remove');
clearAll.addEventListener('click', clearCompletedTasks);

export default './script.js';