const {Router} = require("express");
const { getTask, createTask, updateTask, deleteTask } = require("../controllers/task.controller");
const authenticateUser = require("../middlewares/authMiddleware");

const taskRoute = Router();

taskRoute.get('/', authenticateUser, getTask);
taskRoute.post('/', authenticateUser, createTask);
taskRoute.patch('/:id', authenticateUser, updateTask);
taskRoute.delete('/:id', authenticateUser, deleteTask);

module.exports = taskRoute;