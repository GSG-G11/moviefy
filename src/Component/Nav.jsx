import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import MovieContext from '../context/moviesContext';
import './css/Nav.css';
import { Image, Input } from '../eleComponent';

function Nav() {
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const {
    page,
    setMovies, loader, setLoader,
  } = React.useContext(MovieContext);
  const handleOnChange = ({ target }) => {
    setLoader(true);
    setSearchTerm(target.value);
  };

  useEffect(() => {
    console.log(loader);
    console.log(searchTerm);
    const controller = new AbortController();
    const { signal } = controller;
    if (searchTerm) {
      const API_SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=e4e72d82643e224bf78695be0b5602cd&query=${searchTerm}`;
      fetch(API_SEARCH, { signal })
        .then((res) => res.json())
        .then(({ results }) => {
          setMovies(results);
          setLoader(false);
        })
        .catch((err) => console.log(err));
    } else {
      const API_SEARCH = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&&api_key=e4e72d82643e224bf78695be0b5602cd&page=${page}`;
      fetch(API_SEARCH, { signal })
        .then((res) => res.json())
        .then(({ results }) => {
          setMovies(results);
          setLoader(false);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      controller.abort();
    };
  }, [searchTerm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="navBar">
      <div className="logo">
        <Image className="logoImg" src={logo} alt="logo" />
        <p className="logo-name">Moviefy</p>
      </div>
      <form className="form-search" onSubmit={handleOnSubmit}>
        <Input type="text" onChange={handleOnChange} value={searchTerm} placeholder="Search by movie title" />
      </form>
      <div className="navBar-Link">
        <Link className="link" to="/">Movies</Link>
        <Link className="link" to="/watchList">WatchList</Link>
        <Link className="link" to="/login">Log In</Link>

      </div>
    </nav>
  );
}

export default Nav;
