import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './css/Nav.css';

function Nav() {
  return (
    <nav className="navBar">
      <div className="logo">
        <img className="logoImg" src={logo} alt="logo" />
      </div>
      <div className="navBar-Link">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/watchList">WatchList</Link>
        <Link className="link" to="/Login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
