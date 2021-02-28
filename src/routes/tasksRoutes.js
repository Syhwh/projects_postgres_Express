const { Router } = require('express')
const {
	createTask,
	deleteTask,
	getAllTasks,
	getOneTask,
	editTask
} = require('../controllers/tasksControllers')
const authentication = require('../utils/verifyToken')

const tasksRoutes = Router()

tasksRoutes.get('/tasks', getAllTasks)
tasksRoutes.get('/tasks/:id', getOneTask)
tasksRoutes.post('/tasks', createTask)
tasksRoutes.put('/tasks/:id', editTask)
tasksRoutes.delete('/tasks', deleteTask)

module.exports = tasksRoutes