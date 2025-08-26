const { signupmodel, addmodel, feedbackmodel , reportmodel } = require('../models/model')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const key = process.env.SECRETJSONKEY || 'kush123'
const multer = require('multer')
// post for sigup form hit

// In-memory store for OTPs (use Redis or DB for production)
const otpStore = {};

// Send OTP
async function sendOtp(req, res) {
  const { email } = req.body;
  console.log(email)
  if (!email) return res.json({ message: "Email required" });
  console.log(process.env.EMAIL, process.env.PASS)
  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  // Save OTP for verification (expires in 5 min)
  otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 };
  // Send email
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
  secure: false,
      auth: {
        user: process.env.EMAIL, // your gmail
        pass: process.env.PASS  // your app password
      }
    });

    await transporter.sendMail({
      from: `"Worker Manager" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
      html: `<h2>Your OTP code is: <b>${otp}</b></h2>`
    });
console.log("OTP sent to email");
    res.json({ success: true, message: "OTP sent to email" });
  } catch (err) {
    console.log("OTP email error", err);
    res.json({ message: "Failed to send OTP" });
  }
}


// Verify OTP

async function signup (req, res) {
  try {
    const { username, password, email, agree, otp } = await req.body
    console.log(email, otp)
    if (!username || !password || !email) {
      return res.json({ message: 'Please enter form properly' })
    }
    // Check if user with email already exists
 const existingUser = await signupmodel.findOne({ email })
    if (existingUser) {
      return res.json({ message: 'Email already registered' })
    }

    if (!email || !otp) return res.json({ message: "Email and OTP required" });

  const record = otpStore[email];
  if (!record) return res.json({ message: "OTP not found" });
  if (Date.now() > record.expires) return res.json({ message: "OTP expired" });
  if (record.otp !== otp) return res.json({ message: "Invalid OTP" });
  // OTP verified, remove from store
  delete otpStore[email];

    const hashedPassword = await bcrypt.hash(password, Number(process.env.round || 10))

    const user = await signupmodel.create({
      username,
      password: hashedPassword,
      email,
      agree
    })

    if (!user) return res.json({ message: 'Please try again after some time.' })

    const token = jwt.sign({ email, password }, key, { expiresIn: '7d' })

    // res.cookie('authtoken', token, {
    //   httpOnly: true,
    //   maxAge: 7 * 24 * 60 * 60 * 1000
    // })

    res.json({
      success: true,
      message: 'Signup successful!',
      user: {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      token
    })
  } catch (err) {
    console.log('ERROR IS COMING FROM LOGIN CONTROL', err)
    res.json({ message: 'server error' })
  }
}

async function login (req, res) {
  try {
    const { email, password } = await req.body
    if (!email || !password) {
      return res.send('please enter form properly')
    }
    const user = await signupmodel.findOne({ email })
    if (!user) {
      return res.json({ message: 'Invalid email' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const token = jwt.sign({ email, password }, key, { expiresIn: '7d' })
      // res.cookie('authtoken', token, {
      //   httpOnly: true,
      //   maxAge: 7 * 24 * 60 * 60 * 1000
      // })
      return res.json({
        success: true,
        message: 'Login successful!',
        user: {
          username: user.username,
          email: user.email,
          createdAt: user.createdAt
        },
        token
      })
    } else {
      return res.json({ message: 'Invalid password' })
    }
  } catch (error) {
    console.log('ERROR IS COMING FROM LOGIN CONTROL', error)
    res.json({ message: 'server error' })
  }
}

async function check (req, res) {
  try {
    const { email, password, date } = await req.body
    if (!email || !password || !date) {
      console.log(req.body)
      return res.send('please enter form properly')
    }

    const user = await signupmodel.findOne({ email })
    if (!user) {
      return res.send('Invalid username')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const worker = await addmodel.find({ email, date })

      if (worker.length > 0) {
        return res.json(worker)
      } else {
        return res.send('there are not any worker on that specific date')
      }
    } else {
      return res.send('Invalid password')
    }
  } catch (error) {
    console.log('ERROR IS COMING FROM  CHECK CONTROL', error)
    res.send('server error')
  }
}

async function add (req, res) {
  const { email, workers } =  req.body
  console.log(req.body)
  if (!email) return res.json({message:'Invaild token'})

  if (!workers || (!Array.isArray(workers) && typeof workers !== 'object')) {
    return res.json({message:'Invalid data'})
  }

 // handle object-like submission

  try {
    
    const { email, workers } = req.body;
  if (!email) return res.json({message:'Invaild token'})
    
    if (!workers || (!Array.isArray(workers) && typeof workers !== 'object')) {
      return res.json({message:'Invalid data'})
    }
    // Save each worker
    for (const worker of workers) {
      await addmodel.create({
        email,
        workername: worker.name,
        salary: worker.salary,
        date: worker.hireDate,
        role: worker.role
      });
    }

    res.json({alert:'Workers added successfully!'})
  } catch (err) {
    console.log('ERROR IS COMING FROM ADD CONTROL', err)
    res.json({message:'server error'})
  }
}
async function feedback (req, res) {
  let { feedback, rating, userEmail } = req.body
  try {
    if (!feedback || !rating || !userEmail)
      return res.send('please enter form properly')

    await feedbackmodel.create({
      feedback,
      rating,
      email:userEmail
    })
    res.json({success:true , message:'Feedback submitted successfully!'})
  } catch (error) {
    console.log('ERROR IS COMING FROM FEEDBACK CONTROL', error)
    res.json({success:false , message:'Feedback submitted failed!'})
  }
}
async function deleteWorker(req, res) {
  const { id } = req.params
    console.log(req.params)
  try {
    await addmodel.findByIdAndDelete(id)
    res.json({
      success:true,
       message: 'Worker deleted successfully!'
       })
  } catch (error) {
    console.log('ERROR IS COMING FROM DELETE CONTROL', error)
    res.json({ message: 'server error' })
  } 
}
//report controller
async function reportIssue(req, res) {
  const { issue,
          description,
          userEmail} = req.body
  try {
    if (!userEmail || !issue || !description) {
      return res.json({ success:true,  message: 'please enter form properly' })
    }

    await reportmodel.create({
      issueDescription: description,
      email: userEmail,
      issuetitle: issue
    })
    res.json({ success: true, message: 'Issue reported successfully!' })
  } catch (error) {
    console.log('ERROR IS COMING FROM REPORT CONTROL', error)
    res.json({ success: false, message: 'Issue reporting failed!' })
  }
}
module.exports = {
  signup,
  add,
  login,
  check,
  deleteWorker,
  feedback,
  sendOtp,
  reportIssue
}
