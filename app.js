const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes')
const error_middleware = require('./app/middlewares/error.middleware')

const app = express()

app.use(cors())
app.use(error_middleware)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

module.exports = app
