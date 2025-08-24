const express = require('express');
const bcrypt = require("bcryptjs");
const {signupmodel, addmodel , feedbackmodel
}= require("../models/model")
async function homePage(req , res ) {
    try {
          const {email} = req.user;
          if (!email) {
              return res.status(401).json({
                  message: "Unauthorized"
              });
          }
          const workers = await addmodel.find({email})
          console.log(workers)
          res.json({
              success:true,
              workers
          })
    } catch (error) {
       return res.send("internal server error")
    }
     
}
async function  signupPage(req , res ) {
    try {
        
        res.render("signup")
    } catch (error) {
       return res.send("internal server error")
    }
}
async function loginPage(req , res ) {
    try {
        
        res.json({
            message: "Welcome to the login page",
        })
    } catch (error) {
       return res.send("internal server error")
    }
}
async function checkPage(req , res ) {
    try {
        
        res.render("check")
    } catch (error) {
       return res.send("internal server error")
    }
}
async function addPage(req , res ) {
    try {
        
        res.render("add")
    } catch (error) {
       return res.send("internal server error")
    }
}
async function termPage(req , res ) {
    try {
        
        res.render("term")
    } catch (error) {
       return res.send("internal server error")
    }
}
module.exports = { 
    homePage,
    signupPage,
    loginPage,
    checkPage,
    addPage,
    termPage
}        