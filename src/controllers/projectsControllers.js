const db = require('../../db')
const { project } = require('../queries/queries')

const createProject = (req, res, next) => {
	const { projectName } = req.body
	console.log(projectName)
	const { _id } = req.user
	db.query(project.createProject, [projectName, _id], (error, response) => {
		console.log(error)
		if (error) return next(error)
		res.redirect('/projects')
	})
	res.send(200).json('project created')
}

const deleteProject = (req, res, next) => {
	db.query(project.deleteProject, (error, response) => {
		if (error) return next(error)
		res.send(200).json('project deleted')
	})

}

const editProject = (req, res) => {
	const { projectName } = req.body
	const { id } = req.params
	db.query(project.editProject, [projectName, id], (error, response, next) => {
		if (error) return next(error)
		res.status(200)
	})
}

const getAllProjects = (req, res, next) => {
	const { _id } = req.user
	db.query(project.getAllProjects, [_id], (error, response) => {
		if (error) return next(error)
		res.status(200).send(response.rows)
	})
}

const getOneProject = (req, res, next) => {
	db.query(project.getOneProject, (error, response) => {
		if (error) return next(error)
		res.status(200).send(response.rows)
	})
}

module.exports = {
	createProject,
	deleteProject,
	getAllProjects,
	getOneProject,
	editProject
}