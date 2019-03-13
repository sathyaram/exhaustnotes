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

// const mongoose = require('../models/Car.js')
// const Cars = mongoose.model('Car')
// const carsData = require('./cars-data.json')

// Cars.remove({}).then(() => {
//   Cars.collection.insert(carsData).then(newCar => {
//     console.log(newCar)
//   })
// }).catch(err => console.log(err))