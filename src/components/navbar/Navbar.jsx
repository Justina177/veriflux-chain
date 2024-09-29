import React from 'react'
import logo from '../../asset/images/veriflux.png'
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo"> 
        <img src={logo} alt="veriflux image" />
        </div>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/issue-certificate">Issue Certificate</a></li>
          <li><a href="/verify-certificate">Verify Certificate</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact us</a></li>
        </ul>
        <div className="nav-buttons">
        <button className="login">Login</button>
        <button className="sign-up">Sign-up</button>
      </div>

    </nav>
  )
}

export default Navbar