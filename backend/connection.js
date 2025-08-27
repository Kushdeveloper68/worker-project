const mongoose = require('mongoose');
async function  mongodbConnection(url) {
    mongoose.connect(url,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsInsecure: false,
      serverSelectionTimeoutMS: 10000,
    })
}
module.exports = {
  mongodbConnection
}
