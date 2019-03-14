const mongoose = require('../db/connection')
const CarImage = require('./CarImage')
const CarSound = require('./CarSound')
const Schema = mongoose.Schema;

const Car = new Schema({
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carImages: [CarImage],
  carSound: [CarSound],
  carLink: String
})

module.exports = mongoose.model("Car", Car)