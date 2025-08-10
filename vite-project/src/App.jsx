import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Landingpage, Signuppage , Loginpage, Dashboard, Add} from "./frontend";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
