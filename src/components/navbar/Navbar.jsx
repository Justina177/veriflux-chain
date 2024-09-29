import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../asset/images/veriflux.png'
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar">
        <div className="logo"> 
        <img src={logo} alt="veriflux image" />
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/issue-certificate" className={({ isActive }) => (isActive ? 'active' : '')}>Issue Certificate</NavLink></li>
          <li><NavLink to="/verify-certificate" className={({ isActive }) => (isActive ? 'active' : '')}>Verify Certificate</NavLink></li>
          <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
          <li><NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>Contact us</NavLink></li>
        </ul>
        <div className="nav-buttons">
        <button className="login">Login</button>
        <button className="sign-up">Sign-up</button>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>

    </nav>
  )
}

export default Navbar