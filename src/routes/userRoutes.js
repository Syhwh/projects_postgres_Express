const { Router } = require('express')
const { getUsers, getUser, deleteUser, insertUser } = require('../controllers/userControllers')
const authentication = require('../utils/verifyToken')


const userRoutes = Router()

userRoutes.get('/users', authentication, getUsers)
userRoutes.get('/users/id', getUser)

userRoutes.post('/users', insertUser)
userRoutes.delete('/users/id', deleteUser)

module.exports = { userRoutes }