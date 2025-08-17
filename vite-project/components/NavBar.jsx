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
        navLinks.style.translate = "400px 0px";
    } else {
        navLinks.style.translate = '-400px 0px';
    }
 }
  return (
    <>
       <nav>
        <div className="logo-div">
            <img src="/vite.svg" alt="logo" className="logo" />
        </div>
        <button className="nav-menu-btn" onClick={handleMenuClick} >|||</button>
        <div className="nav-links">
            <ul>
                <li><NavLink to="/add">Add Worker</NavLink></li>
                <li><NavLink to="/check">Check Worker</NavLink></li>
                <li><NavLink to="/term">Terms & Conditions</NavLink></li>
                <li><button onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    sessionStorage.removeItem('user');
                    sessionStorage.removeItem('token');
                    window.location.href = '/signup';
                }}>Logout</button></li>
            </ul>
        </div>
       </nav>
    </>
  ) 
}
export default Navbar