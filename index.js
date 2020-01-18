const express = require('express')
const app = express()

const redis = require('redis')
const client = redis.createClient()
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

app.get('/jobs', async(req, res) => {
  const data = await getAsync('github')
  return res.send({data})
})


const port = 8080

app.listen(port, _ => { console.log(`Listening on port ${port}`) })