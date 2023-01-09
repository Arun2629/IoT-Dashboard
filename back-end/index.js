const express = require('express')
const cors = require('cors')
const configureDb = require('./config/database')
require('dotenv').config()
const app = express()
const port = 3055

configureDb()

app.use(express.json())
app.use(cors())

const usersCtrl = require('./app/controllers/usersController')
const {authenticateUser} = require('./app/middlewares/authentication')

//user register & login
app.post('/users/register', usersCtrl.register)
app.post('/users/login', usersCtrl.login)

app.listen(port, () => {
    console.log('server is now running on port', port)
})