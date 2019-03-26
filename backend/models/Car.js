const mongoose = require("../db/connection");
const CarImage = require("./CarImage");
const Schema = mongoose.Schema;

const Car = new Schema({
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carImages: String,
  carLink: String,
  carSound: String,
  carSoundCredit: String,
  carSoundCreditLink: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", Car);
