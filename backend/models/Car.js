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
  carSoundCreditLink: String
})

module.exports = mongoose.model("Car", Car)