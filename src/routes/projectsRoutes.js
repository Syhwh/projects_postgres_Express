const { Router } = require('express')
const {
	createProject,
	deleteProject,
	getAllProjects,
	getOneProject,
	editProject
} = require('../controllers/projectsControllers')
const authentication = require('../utils/verifyToken')

const projectsRoutes = Router()

projectsRoutes.get('/projects', authentication, getAllProjects)
projectsRoutes.get('/projects/:id', authentication, getOneProject)
projectsRoutes.post('/projects', authentication, createProject)
projectsRoutes.put('/projects/:id', editProject)
projectsRoutes.delete('/projects', authentication, deleteProject)

module.exports = projectsRoutes