const cors = require('cors')
const helmet = require('helmet')

module.exports = app => {
  app.use(cors())
  app.use(helmet())
}