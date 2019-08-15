const Controller = require('./Controller')
const cities = require('../data/cities')

class WeatherController extends Controller {
  constructor() {
    super()
    this.data = cities.data
    this.index = this.index.bind(this)
  }

  index(request, response) {
    return response
      .status(200)
      .json({
        errors: false,
        msg: 'Cities retrieved',
        body: this.data
      })
  }
}

module.exports = WeatherController
