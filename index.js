const app = require('./boot/app')
const port = process.env.PORT

const startServer = async () => {
  app.listen(port, _ => { console.log(`Listening on port ${port}`) })
}

startServer()