import React from 'react'
import "../style/signuppage.css"
import {Navbar , Footer} from "../../components"
function Signuppage() {
  return (  <>
   <Navbar/>
  <div className='signup-div'>
   <div className="signup-container">
    <form className="signup-form">
      <h2>Create your account</h2>

      <label for="fullname">Full Name</label>
      <input type="text" id="fullname" placeholder="Enter your full name" required/>

      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required/>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required/>

      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" placeholder="Confirm your password" required/>

      <button type="submit" className="btn">Sign Up</button>

      <p className="login-text">Already have an account? <a href="#">Log in</a></p>
    </form>
  </div>
  </div>
  <Footer/>
</>
  )
}

export default Signuppage