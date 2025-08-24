import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useLocation, Link } from 'react-router-dom'
import '../style/loginpage.css'
function Loginpage () {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  console.log(user)
  if (user || token) {
    return <Navigate to='/dashboard' />
  }
  const [data, setData] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      })

      setData(response.data)
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
        sessionStorage.setItem('user', JSON.stringify(response.data.user))
        sessionStorage.setItem('token', response.data.token)

        navigate('/dashboard', {
          state: { user: response.data.user, token: response.data.token }
        })
      }
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <>
      <div className='login-div'>
        <div className='login-container'>
          <form className='login-form' onSubmit={handleSubmit}>
            <h2>Welcome Back</h2>
            <h1 className={data.message ? 'alerth1' : 'alert-success'}>
              {data.message}
            </h1>
            <label htmlFor='username'>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              id='username'
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

            <button type='submit' className='btn'>
              Login
            </button>

            <p className='links'>
              <a href='#'>Forgot Password?</a>
            </p>

            <p className='links'>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Loginpage
