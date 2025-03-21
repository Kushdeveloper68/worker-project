const express = require('express');
const router = express.Router();
const {getroute, getCheck} = require('../controllers/getcontrol');

router.get('/', getroute);
router.get('/check', getCheck);

module.exports = {
    router
}