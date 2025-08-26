import React from 'react'
import "../style/landingpage.css"
import {Navbar , Footer , Number} from "../../components"
import {Link , NavLink} from "react-router-dom"
export default function Landingpage() {
  return (
    <div className="landing-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Empower Your Workforce <br />
            <span>with Smarter Management</span>
          </h1>
          <p>
            Optimize productivity, streamline communication, and manage teams
            effortlessly with our next-gen workforce platform.
          </p>
          <div className="hero-buttons">
            <Link to="/signup">
              <button className="btn btn-primary">🚀 Get Started</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline">Log In</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>✨ Key Features</h2>
        <p>Everything you need to manage your workforce in one place.</p>
        <div className="feature-cards">
          <div className="card">
            <span className="icon">📅</span>
            <h3>Shift Scheduling</h3>
            <p>Plan, assign, and automate shifts with ease.</p>
          </div>
          <div className="card">
            <span className="icon">👥</span>
            <h3>Team Management</h3>
            <p>Organize roles, manage access & build better teams.</p>
          </div>
          <div className="card">
            <span className="icon">📊</span>
            <h3>Performance Analytics</h3>
            <p>Track growth & productivity with real-time insights.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>🚀 Why Choose Us?</h2>
        <div className="why-grid">
          <div>
            <h3>⚡ Blazing Fast</h3>
            <p>Lightning-fast dashboards and smooth workflows.</p>
          </div>
          <div>
            <h3>🔒 Enterprise Security</h3>
            <p>Multi-layer protection to keep your data safe.</p>
          </div>
          <div>
            <h3>🌍 Anywhere Access</h3>
            <p>Cloud-based platform, accessible on all devices.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>💬 What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “This platform revolutionized our workflow. Scheduling is now
              effortless.”
            </p>
            <span>- Sarah Johnson, HR Manager</span>
          </div>
          <div className="testimonial">
            <p>
              “User-friendly & powerful. Our efficiency skyrocketed by 40%.”
            </p>
            <span>- Michael Lee, Team Lead</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>🚀 Start Managing Smarter Today</h2>
        <p>Sign up now and bring efficiency to your workforce.</p>
        <Link to="/signup">
          <button className="btn btn-primary">Get Started Now</button>
        </Link>
      </section>

      {/* FOOTER */}
      
    </div>
  );
}
