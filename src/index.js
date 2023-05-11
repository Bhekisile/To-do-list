let tasks = localStorage.getItem('todos') ||[]
function addNewTask() {
  const taskIndex = tasks.length;
  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  saveTasks();
  const listItemElement = createTaskLists(task);
  taskList.appendChild(listItemElement);
  console.log('task', task);
}

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
  e.preventDefault()
  addNewTask()
});

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

deleteTask = (index) => {
  tasks = tasks.filter((task) => task.index !== index);
  updateTaskIndexes();
};

editTaskDescription = (task) => {
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
  task.index = Array.from(listItemElement.parentNode.children).indexOf(listItemElement);
};

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

let clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskIndexes();
  saveTasks();
  renderTasks();
};

const clearCompleted = document.querySelector('a');
clearCompleted.addEventListener('click', (event) => {
  event.preventDefault();
  clearCompletedTasks();
});

const createTaskLists = (task) => {
  const deleteButton = document.createElement('button');
  const listItemElement = document.createElement('li');
  const descriptionElement = document.createElement('span');

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = task.completed;

  const markAsCompleted = (task) => {
    task.completed = true;
  };
  const markAsIncomplete = (task) => {
    task.completed = false;
  }
  checkboxElement.addEventListener('change', () => {
    if (checkboxElement.checked) {
      markAsCompleted(task);
    } else {
      markAsIncomplete(task);
    }
    saveTasks();

    if (checkboxElement.checked) {
      deleteButton.style.display = 'block';
      listItemElement.style.display = 'flex';
      listItemElement.style.justifyContent = 'flex-start';
      deleteButton.style.marginLeft = 'auto';
    } else {
      deleteButton.style.display = 'none';
      descriptionElement.style.color = '#999';
    }
  });

  descriptionElement.textContent = task.description;

  descriptionElement.addEventListener('click', () => {
    editTaskDescription(task);
  });

// the remains
listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(descriptionElement);
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';

  deleteButton.addEventListener('click', () => {
    deleteTask(task.index);
  });

  listItemElement.appendChild(deleteButton);

  return listItemElement;
};