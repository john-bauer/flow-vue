const express = require('express')
const config = require('./config/config')
const app = express()

app.listen(config.port)

app.use('/', (req, res) => {
  res.send('hello express')
})
console.log(`app running on ${config.port}`)
