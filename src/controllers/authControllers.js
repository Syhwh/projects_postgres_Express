const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../../db')
const { auth, user } = require('../queries/queries')

const register = async (req, res, next) => {
	const { username, email, password } = req.body
	console.log(email)
	const { rows } = await db.query(auth.getEmail, [email])

	if (rows.length > 0) {
		return res.status(400).send('Email already exists')
	}

	const salt = await bcrypt.genSalt(10)
	const hashPassword = await bcrypt.hash(password, salt)
	try {
		await db.query(user.insertUser, [username, email, hashPassword])
		res.status(200)
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const login = async (req, res, next) => {
	const { email, password } = req.body
	const { rows } = await db.query(auth.getUserByEmail, [email])

	if (!rows.length) {
		return res.status(400).send('Email or password wrong')
	}
	const account = rows[0]
	const validPassword = await bcrypt.compare(password, account.user_password)

	if (!validPassword) return res.status(400).send('Invalid password')

	const token  =jwt.sign({_id:account.user_id},process.env.TOKEN_SECRET)
	console.log(token)
	res.header('auth-token',token).send(token)

}

module.exports = {
	register,
	login
}