const express = require('express')
const router = express.Router()
const Cars = require('../models/Cars')
const mongoose = require('mongoose')

// Get all Cars from DB
router.get('/api/cars', (req, res) => {
  Cars.find({}).then((items) => {
    console.log(items)
    res.json(items)
  })
})

module.exports = router