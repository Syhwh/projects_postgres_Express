const db = require('../../db')
const { task } = require('../queries/queries')

const getAllTasks = (req, res, next) => {
	const { projectId } = req.body
	db.query(task.getAllTasks, [projectId], (error, response) => {
		if (error) return next(error)
		res.status(200).send(response.rows)
	})
}

const getOneTask = (req, res, next) => {
	const { projectId, taskId } = req.body
	db.query(task.getOneTask, [projectId, taskId], (error, response) => {
		if (error) return next(error)
		res.status(200).send(response.rows)
	})
}


const createTask = (req, res, next) => {
	const { taskName, taskDescription, projectId } = req.body
	console.log(taskName)

	db.query(task.createTask, [taskName, taskDescription, projectId], (error, response) => {
		console.log(error)
		if (error) return next(error)
		res.redirect('/tasks')
	})
	res.send(200).json('Task created')
}

const deleteTask = (req, res, next) => {
	const { taskId, projectId } = req.body
	db.query(task.deleteTask, [projectId, taskId], (error, response) => {
		if (error) return next(error)
		res.send(200).json('Task deleted')
	})

}

const editTask = (req, res) => {
	const { TaskName } = req.body
	const { id } = req.params
	db.query(task.editTask, [TaskName, id], (error, response, next) => {
		if (error) return next(error)
		res.status(200)
	})
}



module.exports = {
	createTask,
	deleteTask,
	getAllTasks,
	getOneTask,
	editTask
}