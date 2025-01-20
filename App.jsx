import axios from "axios";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
axios.defaults.baseURL = "http://localhost:5173/api"; 
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
