class Task extends Array {

    constructor(description) {
        super();
        this.description = description;
        this.completed = false;
    }


    toggleComplete() {
        this.completed = !this.completed
    }
}


class TaskManager {
    constructor() {
        this.Task = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.Task.push(task);
        this.displayTask();
    }


    removeTask(index) {
        this.Task.splice(index, 1);
        this.displayTask();
    }

    toggleTaskComplete(index) {
        this.Task[index].toggleComplete();
        this.displayTask();
    }


    displayTask() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.Task.forEach((task, index) => {
            console.log(task.description);
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';


            const taskDescription = document.createElement('span');
            taskDescription.textContent = task.description;
            taskDescription.addEventListener('click', () => this.toggleTaskComplete(index))


            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => this.removeTask(index));

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });


    };
}



document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');




    addTaskBtn.addEventListener('click', () => {
        const taskDescription = taskInput.value.trim();
        if (taskDescription) {
            taskManager.addTask(taskDescription);
            taskInput.value = '';
            taskInput.focus();
        }
    });




    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
