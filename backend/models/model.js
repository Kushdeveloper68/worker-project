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
  feedback:{
    type:String,
    required:true
  } ,
  rating:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  }},{timestamps:true})

  const report = new schema({
    email:{
      type:String,
      required:true
    },
    issuetitle:{
        type:String,
        required:true
    },
    issueDescription:{
      type:String,
      required:true
    }
  },{timestamps:true})

const feedbackmodel = mongoose.model("Feedback",feedback);
const addmodel = mongoose.model("Worker", add);
const signupmodel = mongoose.model("User", signup);
const reportmodel = mongoose.model("Report", report);
module.exports = {
    signupmodel,
    addmodel,
    feedbackmodel,
    reportmodel
}