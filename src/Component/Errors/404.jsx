import './404.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="cont">
      <div className="mainBox">
        <div className="err">4</div>
        <div className="err">0</div>
        <div className="err">4</div>
      </div>
      <div className="msg">Page Not Found</div>
      <div className="a">
        {' '}
        <Link to="/" className="a"> Go To Home </Link>
      </div>
    </div>
  );
}

export default NotFound;
