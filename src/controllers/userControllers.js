const db = require('../../db/index')
const {user} = require('../queries/queries')

const getUsers = (req, res) => {
	db.query(user.getAllUsers, (err, response) => {
		res.send(response.rows)
	})
}

const getUser = (req, response, next) => {
	const { id } = req.params
	db.query(user.getUser, [id], (err, res) => {
		if (err) return next(err)
		response.send(res.rows)
	})
}

const insertUser = (req, res, next) => {
	const { username, email, password } = req.body
	console.log(req.body)
	db.query(user.insertUser, [username, email, password], (err, response) => {
		if (err) return next(err)
		res.status(200).redirect('/users')
	})
}

const deleteUser = (req, res) => {
	const { id } = req.params = req.params
	db.query(user.deleteUser, [id], (err, response) => {
		if (err) return next(err)
		res.status(200)
	})
	res.send(name)
}

module.exports = { getUsers, getUser, insertUser, deleteUser }
