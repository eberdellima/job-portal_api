const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(cors())
  app.use(helmet())
}