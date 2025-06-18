import React from "react";
import "../style/signin.css"
const Signup = () => {
  return (
    <div className="signup-page">
      <form method="post" className="login">
        <h2>Sign in</h2>
        <input name="username" placeholder="Username" type="text" />
        <input id="pw" name="password" placeholder="Password" type="password" />
        <input name="email" placeholder="E-Mail Address" type="text" />

        <div className="agree">
          <input id="agree" name="agree" type="checkbox" />
          <label htmlFor="agree"></label>
          <span>Accept rules and conditions</span>
        </div>

        <input type="submit" className="animated" value="Register" />
        <a className="forgot" href="#">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
