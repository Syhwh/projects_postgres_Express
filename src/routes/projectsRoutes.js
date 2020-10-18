const { Router } = require('express')
const {
	createProject,
	deleteProject,
	getAllProjects,
	getOneProject
} = require('../controllers/projectsControllers')
const authentication = require('../utils/verifyToken')

const projectsRoutes = Router()

projectsRoutes.get('/projects', authentication, getAllProjects)
projectsRoutes.post('/projects', authentication, createProject)

module.exports = projectsRoutes