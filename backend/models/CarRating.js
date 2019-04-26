const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const CarRating = new Schema({
  red: Number,
  yellow: Number,
  green: Number
})

module.exports = mongoose.model("CarRating", CarRating)
module.exports.CarRatingSchema = CarRating