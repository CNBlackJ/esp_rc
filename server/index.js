const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client', '/demo.html'))
})

app.get('/joystick', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', '/joystick.html'))
})

app.use('/assets', express.static(path.join(__dirname, '../client/assets')))

app.listen(4000, () => {
  console.log('app listening: http://localhost:4000')
})
