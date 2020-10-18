const express = require('express')
const bodyParser = require('body-parser')

const env = require('dotenv')
const morgan = require('morgan')

const { router } = require('./routes/userRoutes')
const projectsRoutes = require('./routes/projectsRoutes')
const { authRouter } = require('./routes/authRoutes')

env.config()
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router, projectsRoutes, authRouter)



const error = (err, req, res, next) => {
	res.json(err)
}

app.use(error)


const port = process.env.PORT

app.listen(port, () => console.log(`Running in port ${port}`))