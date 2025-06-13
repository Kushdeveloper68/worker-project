import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from "axios"
const Login =  () => {
   const [data, setData] = useState('');
   
    useEffect(() => {
    axios.get('http://localhost:5000/login')
      .then(response => setData(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
   }, []);
   console.log(data)
  return (
    
    <div className="login-page">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form className="login-form">
        <h3>{data}</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or username" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="submit">Log In</button>

        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>

  );
};

export default Login;
