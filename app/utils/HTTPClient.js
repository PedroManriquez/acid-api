const Axios = require('axios')

class HttpClient {
  constructor () {
    this.api_url = process.env.API_URL
    this.headers = this.get_headers()
  }

  make_request (endpoint, method, data = '') {
    console.log(`${this.api_url}/${endpoint}`)
    return new Promise(
      (resolve, reject) => {
        Axios({
          method,
          url: `${this.api_url}/${endpoint}`,
          headers: this.headers,
          data
        })
        .then((response) => {
          resolve({
            body: response.data,
            status_code: response.status,
          })
        })
        .catch((error) => {
          console.error(`REQUEST FAIL: ${error}`)
          if (error.response)
            reject(error.response.data)
          else
            reject(error)
        })
      }
    )
  }

  get_headers () {
    return {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }
  }
}

module.exports = HttpClient
