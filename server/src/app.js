const express = require('express')

const app = express()

app.listen(8080)

app.use('/', (req, res) =>{
  res.send('hello')
})
console.log('app running on 8080')
