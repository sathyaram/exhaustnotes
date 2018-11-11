const express = require('express')
const app = express()
const parser = require('body-parser')
const mongoose = require('mongoose')
const Cars = require('./models/Cars')
const carRoutes = require('./controllers/car');


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(carRoutes);

app.set('port', process.env.PORT || 3500)

app.listen(app.get('port'), () => {
  console.log('up and running')
})
