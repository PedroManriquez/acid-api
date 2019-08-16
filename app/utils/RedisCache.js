const Redis = require('ioredis')

class RedisCache {
  constructor () {
    this.redis = new Redis(process.env.REDIS_URL)
  }

  set_cache (item, data) {
    this.redis.set(item, JSON.stringify(data))
  }

  get_cache (item) {
    return new Promise(
      (resolve, reject) => {
        this.redis.get(item, (err, data) => {
          if (data && data !== 'null')
            resolve(JSON.parse(data))
          else
            reject(new Error('No data in cache'))
        })
      }
    )
  }

}

module.exports = new RedisCache()
