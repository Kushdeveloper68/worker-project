
 import {Footer, Navbar} from "./components"
function Signup() {
    return (
      <>
	  <Navbar/>
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button className="button">Sign up</button>
				</form>
		<Footer/>
      </>
    )
}
export default Signup 