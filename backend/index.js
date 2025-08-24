const express = require("express")
const app = express()
const cors = require("cors")
const bodyPraser = require('body-parser')
const cookiesP = require('cookie-parser');
const path = require('path')
const {router} = require("./routes/getroute")
const {postRouter} = require("./routes/postroute")
const { mongodbConnection } = require('./connection')

require('dotenv').config({path:__dirname + "/.env"})
const port = process.env.port || 5000

// connection
mongodbConnection(process.env.mongoUrl || "mongodb://localhost:27017/workermanager")
  .then(() => console.log('mongodb conneted'))
  .catch(err => console.log('kush mongo err'))
//routers 
// body parser
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({ extended: true }))
app.use(cookiesP())
app.use(cors())
app.use(express.static(path.join(__dirname, './views')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));
// router middleware 
app.use(router)
app.use(postRouter)
// set up static files
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
)
