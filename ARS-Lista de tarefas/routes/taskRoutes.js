const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.showTasks);
router.post('/add', taskController.createTask);
router.get('/delete/:id', taskController.deleteTask);

module.exports = router;