import React from "react";
import '../App.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
        {/* <span className="bName">Gamma Cities</span> */}
      </div>
      <ul className="navbar-menu">
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
