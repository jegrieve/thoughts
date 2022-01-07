import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
