import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../asset/images/veriflux.png'
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo"> 
        <img src={logo} alt="veriflux image" />
        </div>
        <ul className="nav-links">
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/issue-certificate" activeClassName="active">Issue Certificate</NavLink></li>
          <li><NavLink to="/verify-certificate" activeClassName="active">Verify Certificate</NavLink></li>
          <li><NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
          <li><NavLink to="/contact-us" activeClassName="active">Contact us</NavLink></li>
        </ul>
        <div className="nav-buttons">
        <button className="login">Login</button>
        <button className="sign-up">Sign-up</button>
      </div>

    </nav>
  )
}

export default Navbar