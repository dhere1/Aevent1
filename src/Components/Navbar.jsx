import React from 'react'
import Logo from '../Assets/Aevent.png'

const Navbar = () => {
  return (
    <header className="navbar">
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#events">Events</a>
      <a href="#notification">Notification</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </nav>
    <button className="login-btn">Login</button>
    
  </header>
);
};

export default Navbar