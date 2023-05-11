function addNewTask(description) {
    const taskIndex = tasks.length;
  
    const task = { description, completed: false, index: taskIndex };
    tasks.push(task);
    saveTasks();
  
    const listItemElement = createTaskLists(task);
    taskList.appendChild(listItemElement);
  }