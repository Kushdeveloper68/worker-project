import React from "react";
import "../App.css"; // Make sure this path matches your folder structure

const Check = () => {
  return (
    <form className="check-form" method="post">
      <div>
        <h1>Check</h1>

        <label htmlFor="dateInput">Date:</label>
        <input type="date" name="date" id="dateInput" required /> <br />

        <label htmlFor="name">Username:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Username"
          required
        /> <br />

        <label htmlFor="number">Password:</label>
        <input
          type="password"
          name="number"
          id="number"
          placeholder="Password"
          required
        />

        <button type="submit" className="submit-btn">Check</button>
        <button type="reset" className="add-btn">Reset</button>
      </div>
    </form>
  );
};

export default Check;
