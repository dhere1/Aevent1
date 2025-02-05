import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "antd";

const Navbar = () => {
  const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
  const name = user?.name;
  const userName = (
    (name?.split(" ")[0][0]?? "") + (name?.split(" ")?.[1]?.[0] ?? "")).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const items = [{ label: "Logout", onClick: handleLogout }];

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
        <a href="/contact">Contact Us</a>
      </nav>
      {user ? (
        <Dropdown menu={{ items }} trigger={["hover"]}>
          <Avatar style={{ cursor: "pointer" }}>{userName}</Avatar>
        </Dropdown>
      ) : (
        <div className="button-container">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
