
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">

        <div className="logo">
          <img src="https://resources.groww.in/web-assets/img/website-logo/groww_logo.webp" alt="Groww" />
          
        </div>

        <div className="nav-links">
          <a href="#">Stocks</a>
          <a href="#">F&O</a>
          <a href="#">Mutual Funds</a>
          <a href="#">More</a>
        </div>

      </div>

      <div className="navbar-right">

        <input
          type="text"
          placeholder="Search stocks..."
          className="search"
        />

        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Login / Sign up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
