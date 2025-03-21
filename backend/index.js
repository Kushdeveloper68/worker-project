const express = require('express')
const app = express()
const http = require('http')
const bodyPraser = require('body-parser')
const cors = require('cors');
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 5000
const { mongodbConnection } = require('./connection')
const { router } = require('./routes/getroute')
const  {postRouter} = require('./routes/postroute');

// frontend request cors 
app.use(cors());
// connection
mongodbConnection('mongodb://localhost:27017/')
  .then(() => console.log('mongodb conneted'))
  .catch(err => console.log('kush mongo err'))
// body parser
app.use(bodyPraser.json());
app.use(express.json());
app.use(bodyPraser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
// set up static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(postRouter)
app.use(router)
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
)
