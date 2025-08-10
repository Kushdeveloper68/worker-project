import  "../src/style/navstyle.css";
import {useState} from "react"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
 const handleMenuClick = () => {
    setIsOpen(!isOpen);
    const navLinks = document.querySelector('.nav-links');
    if (isOpen) {
        navLinks.style.translate = "-350px 0px";
    } else {
        navLinks.style.translate = '350px 0px';
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
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
        </div>
       </nav>
    </>
  ) 
}
export default Navbar