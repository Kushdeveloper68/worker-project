const express = require("express");
const postRouter = express.Router()
const {tokenmiddleware} = require("../middleware/tokenmiddleware")
const {signup, add, login, check, feedback} = require("../controllers/postcontrol")

postRouter.post('/signup', signup )
postRouter.post('/add',tokenmiddleware, add )
postRouter.post('/login', login )
postRouter.post('/check', tokenmiddleware, check )
postRouter.post('/feedback', tokenmiddleware, feedback )
module.exports = {
    postRouter
}