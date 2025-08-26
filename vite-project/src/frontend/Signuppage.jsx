import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useLocation, Link } from 'react-router-dom'
import '../style/signuppage.css'
import { signupOtp , signupUser } from './../services/api';
function Signuppage () {
  const [data, setdata] = useState({})
  const [otp, setotp] = useState("")
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comformedPassword, setComformedPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const user = location.state?.user || JSON.parse(localStorage.getItem('user'))
  const token = location.state?.token || localStorage.getItem('token')
useEffect(() => {
  if (user && token) {
    navigate('/dashboard', { state: { user, token } })
    return
  }
}, [user, token])

  const sendOtpHandler = async () => {
    try {
      const response = await signupOtp({ email })
      setdata(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const response = await signupUser({
        username,
        email,
        password,
        comformedPassword,
        otp
      })
      setdata(response.data)
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
        sessionStorage.setItem('user', JSON.stringify(response.data.user))
        sessionStorage.setItem('token', response.data.token)
        navigate('/dashboard', {
          state: { user: response.data.user, token: response.data.token }
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='signup-div'>
        <div className='signup-container'>
          <form className='signup-form' onSubmit={submitHandler}>
            <h2>Create your account</h2>
            <h1 className={data.message ? 'alerth1' : 'alert-success'}>
              {data.message}
            </h1>
            <label htmlFor='fullname'>Full Name</label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type='text'
              id='fullname'
              placeholder='Enter your full name'
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              id='email'
              placeholder='Enter your email'
              required
            />

            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              id='password'
              placeholder='Enter your password'
              required
            />

            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              value={comformedPassword}
              onChange={e => setComformedPassword(e.target.value)}
              type='password'
              id='confirm-password'
              placeholder='Confirm your password'
              required
            />
            <label htmlFor='otp'>OTP</label>
            <input
              value={otp}
              onChange={e => setotp(e.target.value)}
              type='text'
              id='otp'
              placeholder='Enter OTP'
              required
            />
            <button type='button' onClick={sendOtpHandler} className='btn'>
              Send OTP
            </button>
            <button type='submit' className='btn'>
              Sign Up
            </button>

            <p className='login-text'>
              Already have an account?<Link to='/login'>Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signuppage
