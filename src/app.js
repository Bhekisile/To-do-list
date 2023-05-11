import './main.css';

const taskList = document.getElementById('task-list');
// const newTaskInput = document.getElementById('new-task-input');
// const newTask = document.querySelector('new-task');
// const btn = document.getElementById('btn'); 

const tasks = [
  {
    description: 'wash the dishes',
    completed: 'false',
    index: '0',
  },
  {
    description: 'complete To Do list project',
    completed: 'true',
    index: '1',
  },
];

const createCheckbox = () => {
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  return taskCheckbox;
};

for (let index = 0; index < tasks.length; index += 1) {
  const listItem = document.createElement('li');
  listItem.appendChild(createCheckbox());
  listItem.appendChild(document.createTextNode(tasks[index].description));
  taskList.appendChild(listItem);
}

  // Create a horizontal line element
const hr = document.querySelector('.hr');
hr.innerHTML = `<hr>`;
const clear = document.getElementById('clear');
clear.innerHTML = `Clear all completed`;
