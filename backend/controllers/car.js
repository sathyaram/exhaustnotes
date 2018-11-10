const express = require('express')
const router = express.Router()
const { Cars } = require('../models/Cars')
const mongoose = require('mongoose')

// Get all Cars from DB
router.get('/api/cars', (req, res, next) => {
  Cars.find({}).then((items) => {
    console.log(items)
    res.json(items)
  }).catch(next)
})

module.exports = router