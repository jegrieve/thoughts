import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/Session/SignIn';
import SignUp from './components/Session/SignUp';
import UserProfile from './components/Userpage/UserProfile';
import LandingPage from './components/Homepage/LandingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/user/:userId" element={<UserProfile />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
