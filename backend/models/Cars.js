const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Cars = new Schema({
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carImage: String,
  carSound: String,
  carCredit: String,
  carLink: String,
})

module.exports = mongoose.model("Cars", Cars)