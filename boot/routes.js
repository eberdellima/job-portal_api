const routes = require('../src/routes/index')

module.exports = app => {
  app.use('/api/jobs', routes)
}