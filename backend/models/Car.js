const mongoose = require('../db/connection')
const CarImage = require('./CarImage')
const Schema = mongoose.Schema;

const Car = new Schema({
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carImages: [CarImage],
  carSound: String,
  carLink: String
})

module.exports = mongoose.model("Car", Car)