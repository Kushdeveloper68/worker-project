const express = require("express");
const postRouter = express.Router()
const {tokenmiddleware} = require("../middleware/tokenmiddleware")
const {signup, add, login, check, feedback, sendOtp , deleteWorker, reportIssue} = require("../controllers/postcontrol")

postRouter.post('/send-otp', sendOtp )
postRouter.post('/signup', signup )
postRouter.post('/add',tokenmiddleware, add )
postRouter.post('/login', login )
postRouter.post('/check', tokenmiddleware, check )
postRouter.post('/feedback', tokenmiddleware, feedback )
postRouter.delete('/workers/:id', tokenmiddleware, deleteWorker )
postRouter.post('/report-issue', tokenmiddleware, reportIssue)

module.exports = {
    postRouter
}