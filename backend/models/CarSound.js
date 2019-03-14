const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const CarSound = new Schema({
  carSoundLink: String,
  carSoundCredit: String,
  carSoundCreditLink: String
})

module.exports = mongoose.model("CarSound", CarSound)