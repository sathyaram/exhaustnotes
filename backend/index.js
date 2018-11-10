const express = require('express')
const app = express()
const parser = require('body-parser')
const mongoose = require('mongoose')


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3500)

app.listen(app.get('port'), () => {
  console.log('up and running')
})
