const express = require('express')
const router = express.Router()
const WeatherController = require('../app/controllers/Weather.controller')

let weather_controller = new WeatherController()

router
  .get('/', (request, response, a) => response.render('index', { title: 'Express' }))
  .get('/cities', weather_controller.index)

module.exports = router
