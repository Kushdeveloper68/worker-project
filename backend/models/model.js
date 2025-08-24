const mongoose = require("mongoose");
const schema = mongoose.Schema;

const signup = new schema({
    username:{
        type:String, 
        required:true
    },
    password:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true 
    } , 
    agree: {
        type:String,
        default:false
    }
},{timestamps:true});

const add = new schema({
    email:{
        type:String, 
        required:true,
    } , 
    date:{
        type:String, 
        required:true 
    },
    workername:{
        type:String, 
        required:true
    },
    salary:{
        type:Number, 
        required:true
    },
    role:{
        type:String, 
        required:false
    }
},{timestamps:true})

const feedback = new schema({
  name:{
    type:String,
    required:true
  } ,
  contact:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }},{timestamps:true})

const feedbackmodel = mongoose.model("Feedback",feedback);
const addmodel = mongoose.model("Worker", add);
const signupmodel = mongoose.model("User", signup);
module.exports = {
    signupmodel,
    addmodel,
    feedbackmodel
}