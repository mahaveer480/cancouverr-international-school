import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h5>   My School</h5>
      </div>
      <div className="nav-links">
        <p><Link to="/firstcomponent">Hodfme</Link></p>
        <p><Link to="/academics">Academics</Link></p>
        <p><Link to="/about">About Us</Link></p>
        <p><Link to="/activities">Activities</Link></p>
        <p><Link to="/contact">Contact</Link></p>
      </div>
      <div className="hamburger" onClick={() => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;