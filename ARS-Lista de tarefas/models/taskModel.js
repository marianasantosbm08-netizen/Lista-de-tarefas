let tasks = [];
let currentId = 1;

class Task {
    constructor(description) {
        this.id = currentId++;
        this.description = description;
        this.status = 'Pendente';
    }
}

function getAllTasks() {
    return tasks;
}

function addTask(description) {
    const task = new Task(description);
    tasks.push(task);
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id != id);
}

module.exports = {
    getAllTasks,
    addTask,
    removeTask
};