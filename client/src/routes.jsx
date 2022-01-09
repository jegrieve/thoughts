import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/Session/SignIn';
import SignUp from './components/Session/SignUp';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
