const express = require('express');
const bcrypt = require("bcryptjs");
const {signupmodel}= require("../models/model")
async function homePage(req , res ) {
    try {
        res.render("home")
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
        
        res.render("login")
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