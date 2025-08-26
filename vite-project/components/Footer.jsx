import "../src/style/footerstyle.css"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <>
     <footer className="footer">
  <div className="footer-container">
    {/* LOGO + ABOUT */}
    <div className="footer-logo">
      <img src="/logo.png" alt="Company Logo" />
      <p>
        Empowering teams with modern workforce management — streamline
        operations, scheduling, and performance tracking with ease.
      </p>
      <Link to="/signup">
        <button className="footer-cta">Start Free</button>
      </Link>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-links">
      <h3>Explore</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact-us">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
      </ul>
    </div>

    {/* SOCIAL LINKS */}
    <div className="footer-social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" className="icon facebook fab fa-facebook-f"></a>
        <a href="https://twitter.com" className="icon twitter fab fa-twitter"></a>
        <a href="https://instagram.com" className="icon instagram fab fa-instagram"></a>
        <a href="https://linkedin.com" className="icon linkedin fab fa-linkedin-in"></a>
      </div>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    <p>© 2025 Developer Kush. All rights reserved.</p>
  </div>
</footer>


        </>
    )
}
export default Footer