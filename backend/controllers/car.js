const express = require('express')
const router = express.Router()
const Car = require('../models/Car')
const mongoose = require('mongoose')

// Get all Cars from DB
router.get('/api/cars', (req, res) => {
  Car.find({}).then((items) => {
    console.log(items)
    res.json(items)
  })
})

module.exports = router