import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./frontend/login.jsx";
import Signup from "./frontend/signup.jsx";
import HomePAge from "./frontend/home.jsx"
import AddWorkers from "./frontend/add.jsx";
import CheckPage from "./frontend/check.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePAge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddWorkers />} />
        <Route path="/check" element={<CheckPage />} />
      </Routes>
    </Router>
  );
};

export default App;
