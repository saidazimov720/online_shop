function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const tasksList = document.getElementById('tasks');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button onclick="deleteTask(this)">Delete</button>
        `;
        tasksList.appendChild(listItem);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    const tasksList = document.getElementById('tasks');
    tasksList.removeChild(listItem);
}