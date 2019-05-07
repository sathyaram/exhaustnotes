const express = require('express')
const router = express.Router()
const Car = require('../models/Car')

// Get all Cars from DB
router.get('/api/cars', (req, res) => {
  Car.find({}).then((items) => {
    console.log(items)
    res.json(items)
  })
});

/**
 * Preforms a PUT type request to update specific
 * @param  {Request} request
 * @param  {Response} response
 */
router.put('/api/cars/:id', async (request, response) => {
  const { type, value, carFields } = request.body;
  const { id } = request.params;

  if (!Number.isInteger(value)) {
    response.status(400).send({
      code: 'bad-request',
      message: `Value must be an integer`
    });
  }

  if (value < 0) {
    response.status(400).send({
      code: 'bad-request',
      message: `Value must be above zero`
    });
  }
  
  try { 
    let car = await Car.findById(id);
    if (!car) {
      return response.status(404);
    }

    if (carFields) {
      car = [...carFields];
    }

    car[type] = value;

    if (await car.save()) {
      response.status(200).send(car);
    } else {
      response.status(500).send({
        code: 'rate-error',
        message: `Error during rate process with id ${id}`
      });  
    }

  } catch (error) {
    response.status(500).send({
      code: 'internal-error',
      message: `Internal error on [PUT] /api/cars/:id with id ${id}`
    });
  }
});

module.exports = router