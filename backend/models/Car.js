const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Car = new Schema({
  carMake: String,
  carModel: String,
  carYear: Number,
  carImage: String,
  carSound: String,
  carTrim: String,
  carCredit: String
})

module.exports = {
  Car: mongoose.model("Car", Car)
}