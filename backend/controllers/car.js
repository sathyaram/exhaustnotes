const express = require('express')
const router = express.Router()
const { Car } = require('../models/Car')

// Creating Methods
router.post('/api/cars', (req, res, next) => {
  console.log(req.body);
  Car.create(req.body).then(item => {
    res.send(item)
  }).catch(next)  
})


module.exports = router