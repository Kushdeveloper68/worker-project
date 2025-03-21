const express = require('express');
const postRouter = express.Router();
const {loginRoute} = require('../controllers/postcontrol');

postRouter.post('/login', loginRoute);

module.exports = {
    postRouter
}