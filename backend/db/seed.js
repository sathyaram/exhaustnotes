const mongoose = require('../models/Cars.js')
const Cars = mongoose.model('Cars')

Cars.find({}).remove(() => {
  let sathya = Cars.insert({
    carYear: 1969,
    carMake: 'Mustang',
    carModel: 'GT',
    carTrim: 'IDK',
    carImage: 'sdfsd',
    carSound: 'sdfsd',
    carCredit: 'sdfsd',
    carLink: 'sdfsdf'
  }).then(newCar => {
      newCar.save(err => console.log(err))
  })
})