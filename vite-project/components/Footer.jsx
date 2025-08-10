import "../src/style/footerstyle.css"
function Footer() {
    return (
        <>
        <footer>
            <div className="footer-content">
                <p>© 2025 Developer Kush. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-logo">
                <img src="/logo.png" alt="Company Logo" />  
            </div>
        </footer>
        </>
    )
}
export default Footer