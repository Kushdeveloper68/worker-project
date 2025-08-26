const express = require('express');
const bcrypt = require("bcryptjs");
const {signupmodel, addmodel , feedbackmodel}= require("../models/model")
async function homePage(req , res ) {
    try {
          const {email} = req.user;
          if (!email) {
              return res.status(401).json({
                  message: "Unauthorized"
              });
          }
          const workers = await addmodel.find({email})
          res.json({
              success:true,
              workers
          })
    } catch (error) {
       return res.send("internal server error")
    }
     
}
module.exports = { 
    homePage,
    
}        