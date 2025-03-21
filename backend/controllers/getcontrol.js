const express = require('express');
const {loginform} = require('../models/model'); 

async function getroute(req , res) {
    res.send("hellow rold ");
} 
async function getCheck(req , res ) {
    res.json({massage: "helloo user "});
}
module.exports = {
    getroute,
    getCheck
}


