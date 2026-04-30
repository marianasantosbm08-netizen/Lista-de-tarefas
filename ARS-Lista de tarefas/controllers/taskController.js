const taskModel = require('../models/taskModel');

function showTasks(req, res) {
    const tasks = taskModel.getAllTasks();
    res.render('index', { tasks });
}

function createTask(req, res) {
    const description = req.body.description;

    if (description.trim() !== '') {
        taskModel.addTask(description);
    }

    res.redirect('/');
}

function deleteTask(req, res) {
    const id = req.params.id;
    taskModel.removeTask(id);

    res.redirect('/');
}

module.exports = {
    showTasks,
    createTask,
    deleteTask
};