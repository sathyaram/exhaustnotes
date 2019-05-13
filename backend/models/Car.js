const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Car = new Schema({
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carLink: String,
  carImage: String,
  carImageCredit: String,
  carImageCreditLink: String,
  carSound: String,
  carSoundCredit: String,
  carSoundCreditLink: String,
  carRateRed: Number,
  carRateYellow: Number,
  carRateGreen: Number,
})

module.exports = mongoose.model("Car", Car)