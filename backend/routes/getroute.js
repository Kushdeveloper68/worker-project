const express = require('express');
const router = express.Router();
const {tokenmiddleware} = require("../middleware/tokenmiddleware")
const {homePage , signupPage, loginPage, checkPage, addPage, termPage} = require("../controllers/getcontrol")
router.get('/', tokenmiddleware, homePage)
router.get('/signup', signupPage)
router.get('/login', loginPage)
router.get('/check', tokenmiddleware, checkPage)
router.get('/add',tokenmiddleware,  addPage)
router.get('/term', termPage)
module.exports = {
    router
}