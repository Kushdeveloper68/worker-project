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
});

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
})

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
  }
})

const feedbackmodel = mongoose.model("feedback",feedback);
const addmodel = mongoose.model("workerList", add);
const signupmodel = mongoose.model("userSignupList", signup);
module.exports = {
    signupmodel,
    addmodel,
    feedbackmodel
}