const redis = require('redis')
const client = redis.createClient()

const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

module.exports = {
  getAsync
}
