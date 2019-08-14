var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var morgan = require('morgan')

var router = require('./routes')

var app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

module.exports = app
