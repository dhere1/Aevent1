import React from 'react'
import Logo from '../Assets/Aevent.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <a href="/">Home</a>
      <a href="/event">Events</a>
      <a href="/notification">Notification</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>
    <div className='button-container'>
    <Link to="/login">
    <button className="login-btn">Login</button>
    </Link>
    <Link to="/signup">
    <button className="signup-btn">Sign Up</button>
    </Link>
    </div>
  </header>
);
};

export default Navbar