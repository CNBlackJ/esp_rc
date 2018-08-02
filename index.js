const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function (req, res) {
  fs.readFile(__dirname + '/demo.html', 'utf8', function(err, text){
    res.send(text);
  });
})

app.listen(3000)