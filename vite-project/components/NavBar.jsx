import  "../src/style/navstyle.css";
import { useLocation, Navigate ,Link, NavLink } from 'react-router-dom'
import {useState} from "react"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
      const location = useLocation();
 const handleMenuClick = () => {
    setIsOpen(!isOpen);
    const navLinks = document.querySelector('.nav-links');
        if (isOpen) {
        navLinks.style.translate = "-350px 0px";
    } else {
        navLinks.style.translate = '350px 0px';
    }
 }
 const handleElement = () => {
    switch (location.pathname) {
        case "/":
            return (
                <>
                <li><NavLink to="/signup">Sign up</NavLink></li>
                <li><NavLink to="/login">Sign in</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                </>
            )
            break;
         case "/dashboard":
            return (
                <>
                <li><NavLink to="/add">Add Worker</NavLink></li>
                <li><NavLink to="/check">Check Worker</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                <li><NavLink to="/report">Report Issue</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
                <li><button onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    sessionStorage.removeItem('user');
                    sessionStorage.removeItem('token');
                    window.location.href = '/signup';
                }}>Logout</button></li>
                
                </>
            )
            break;
            case "/signup":
            return (
                <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Sign in</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                </>
            )
            break;
            case "/login":
            return (
                <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signup">Sign up</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                </>
            )
            break;
            case "/add":
            return (
                <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/check">Check worker</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                <li><NavLink to="/report">Report Issue</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
                </>
            )
            break;
        default:
            return (
                <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signup">Sign up</NavLink></li>
                <li><NavLink to="/login">Sign in</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                </>
            )
            break;
    }
 }
  return (
    <>
       <nav>
        <div className="logo-div">
            <img src="https://static.vecteezy.com/system/resources/previews/010/982/526/original/builder-icon-logo-illustration-construction-worker-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg" alt="logo" className="logo" />
        </div>
        <button 
  className={`nav-menu-btn ${isOpen ? "open" : ""}`} 
  onClick={handleMenuClick}
>
  <span></span>
  <span></span>
  <span></span>
</button>
        <div className="nav-links">
            <ul>
                {handleElement()}
            </ul>
        </div>
       </nav>
    </>
  ) 
}
export default Navbar
