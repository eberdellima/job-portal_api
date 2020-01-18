const { getAsync } = require('../../config/redis')

class Jobs {

  async index(req, res) {
    const result = await getAsync('github')
    const data = JSON.parse(result)
    return res.send({data})
  }
}

module.exports = Jobs