const express = require('express');
const router = express.Router();
const {tokenmiddleware} = require("../middleware/tokenmiddleware")
const {homePage } = require("../controllers/getcontrol")
router.get('/', tokenmiddleware, homePage)
module.exports = {
    router
}