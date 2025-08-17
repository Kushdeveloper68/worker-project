import React from 'react'
import "../style/loginpage.css"
import {Navbar , Footer} from "../../components"
function Loginpage() {
  return (
    <>
      <div className="login-div">
      <div className="login-container">
    <form className="login-form">
      <h2>Welcome Back</h2>
     {/* <h1 className='alerth1'>{ data.message || message}</h1> */}
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" required/>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required/>

      <button type="submit" className="btn">Login</button>

      <p className="links">
        <a href="#">Forgot Password?</a>
      </p>

      <p className="links">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  </div>
  </div>
   </>
  )
}

export default Loginpage