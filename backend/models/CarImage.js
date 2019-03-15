const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const CarImage = new Schema({
  imagePath: String,
  creditText: String,
  creditLink: String
})

module.exports = mongoose.model("CarImage", CarImage)
module.exports.CarImageSchema = CarImage