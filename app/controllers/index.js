const WeatherController = require('./Weather.controller')
const cities = require('../data/cities').data

let weather_controller = new WeatherController(cities)

module.exports = weather_controller
