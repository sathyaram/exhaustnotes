const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.DB_URL);
  console.log('Connecting to Production:' + process.env.DB_URL);
} else {
  mongoose.connect('mongodb://localhost:28017/exhaustnotes'), { useNewUrlParser: true };
  console.log('Connecting to Localhost');
}

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open');
  }); 

module.exports = mongoose;