
const express = require('express')
const env = require('dotenv')
const db = require('../db/index')
env.config()





const app = express()
console.log(db)


app.get('/', (req, response) => {
db.query('SELECT * FROM users',(err,res)=>{
	response.send(res.rows)
})
})

const port = process.env.PORT

app.listen(port, () => console.log(`Running in port ${port}`))