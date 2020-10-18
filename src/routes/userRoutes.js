const { Router } = require('express')
const { getUsers, getUser, deleteUser, insertUser } = require('../controllers/userControllers')
const authentication = require('../utils/verifyToken')


const router = Router()

router.get('/users', authentication, getUsers)
router.get('/users/id', getUser)

router.post('/users', insertUser)
router.delete('/users/id', deleteUser)

module.exports = { router }