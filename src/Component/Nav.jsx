import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './css/Nav.css';

function Nav({ setMovies }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const API_SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=e4e72d82643e224bf78695be0b5602cd&query=${searchTerm}`;
      fetch(API_SEARCH).then((res) => res.json()).then(({ results }) => setMovies(results));
    }
  };
  return (
    <nav className="navBar">
      <div className="logo">
        <img className="logoImg" src={logo} alt="logo" />
        <p className="logo-name">Moviefy</p>
      </div>
      <form className="form-search" onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} value={searchTerm} type="text" placeholder="Search by movie title" />
      </form>
      <div className="navBar-Link">
        <Link className="link" to="/">Movies</Link>
        <Link className="link" to="/watchList">WatchList</Link>
        <Link className="link" to="/Login">Login</Link>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default Nav;
