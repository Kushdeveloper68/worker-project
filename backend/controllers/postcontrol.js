const { signupmodel, addmodel, feedbackmodel } = require('../models/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = process.env.SECRETJSONKEY || 'kush123'
const multer = require('multer')
// post for sigup form hit
async function signup (req, res) {
  try {
    const { username, password, email, agree } = await req.body
    if (!username || !password || !email) {
      return res.json({ message: 'Please enter form properly' })
    }
    // Check if user with email already exists
    const existingUser = await signupmodel.findOne({ email })
    if (existingUser) {
      return res.json({ message: 'Email already registered' })
    }

    const hashedPassword = await bcrypt.hash(password, process.env.round || 10)

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
        email: user.email
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
          email: user.email
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
  let { name, contact, message } = req.body
  try {
    if (!name || !contact || !message)
      return res.send('please enter form properly')

    await feedbackmodel.create({
      name,
      contact,
      message
    })
    res.send('feedback submitted 😊')
  } catch (error) {
    console.log('ERROR IS COMING FROM FEEDBACK CONTROL', error)
  }
}

module.exports = {
  signup,
  add,
  login,
  check,
  feedback
}
