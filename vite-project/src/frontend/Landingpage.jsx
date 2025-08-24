import React from 'react'
import "../style/landingpage.css"
import {Navbar , Footer , Number} from "../../components"
import {Link , NavLink} from "react-router-dom"
export default function Landingpage() {
  return (
    <>
    <section className="hero">
    <div className="hero-content">
      <h1>Streamline Your Workforce Management</h1>
      <p>Efficiently manage your team with our comprehensive platform. Track performance, schedule shifts, and communicate seamlessly.</p>
      <div className="hero-buttons">
       <Link to="/signup"> <button className="btn btn-primary">Sign Up</button></Link>
        <Link to="/login"><button className="btn btn-outline">Log In</button></Link>
      </div>
    </div>
  </section>
  <section className="features">
    <h2>Key Features</h2>
    <p>Our platform offers a range of tools to help you manage your workforce effectively.</p>
    <div className="feature-cards">
      <div className="card">
        <span className="icon">📅</span>
        <h3>Shift Scheduling</h3>
        <p>Easily create and manage employee schedules with our intuitive interface.</p>
      </div>
      <div className="card">
        <span className="icon">👥</span>
        <h3>Team Management</h3>
        <p>Organize your team, assign roles, and manage permissions effortlessly.</p>
      </div>
      <div className="card">
        <span className="icon">📊</span>
        <h3>Performance Tracking</h3>
        <p>Monitor employee performance and identify areas for improvement with detailed reports.</p>
      </div>
    </div>
  </section>
  <section className="cta">
    <h2>Ready to Transform Your Workforce Management?</h2>
    <p>Sign up today and experience the difference.</p>
    <button className="btn btn-primary">Get Started</button>
  </section>
    </>
  )
}
