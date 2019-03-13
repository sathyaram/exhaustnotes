const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL);
  console.log('Connecting to Mlab');
} else {
  mongoose.connect('mongodb://localhost/exhaustnotes'), { useNewUrlParser: true };
  console.log('Connecting to Localhost');
}

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open');
  }); 

module.exports = mongoose;