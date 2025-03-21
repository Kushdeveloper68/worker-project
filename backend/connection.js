const mongoose = require('mongoose');
async function  mongodbConnection(url) {
    mongoose.connect(url)
}
module.exports = {
  mongodbConnection
}