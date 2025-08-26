import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"
import {Landingpage, Signuppage , Loginpage, Dashboard, Add,   ReportIssuePage, FeedbackPage} from "./frontend";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout/>} > 
        <Route index element={<Landingpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/report" element={<ReportIssuePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Route>
      </Routes>
    </Router>
  );
};

export default App;
