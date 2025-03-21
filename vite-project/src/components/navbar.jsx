import "../style/navbar.css"
import {navShow} from "./funtion"
function Navbar() {
    return (
        <>
        <nav className="nav-div">
         <div className="nav-logo-div">
          <img src="#" alt="logo" />
         </div>
         <div className="nav-heading-div">
            <h1>OUR WORKER MANAGER</h1>
         </div>
          <div className="navigation-div" id="navigation-div">
            <button onClick={navShow}>i</button>
            <div>
                <ul className="nav-list">
                    <li>HOME</li>
                    <li>CHECK</li>
                    <li>ADD+</li>
                    <li>PROFILE</li>
                    <li>TERM & CONDI</li>
                    <li>DEVELOPER</li>
                </ul>
                <ul className="nav-social">
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                </ul>
            </div>
          </div>
        </nav>
        </>
    ) 
}
export default Navbar