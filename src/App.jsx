import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieContext from './context/moviesContext';
import {
  Nav, MovieDetails, Home, WatchListComp, Login,
} from './Component';
import NotFound from './Component/Errors/404';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const { signal } = controller;
      const API_LINK = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&&api_key=e4e72d82643e224bf78695be0b5602cd&page=${page}`;
      const watchListforStorge = JSON.parse(localStorage.getItem('watchList')) || [];
      const isLoginFromStorge = localStorage.getItem('isLogin');
      setIsLogin(isLoginFromStorge);
      setWatchList(watchListforStorge);
      fetch(API_LINK, { signal })
        .then((res) => res.json())
        .then(({ results }) => {
          setMovies(results); setLoader(false);
        })
        .catch((err) => console.log(err));
      return () => {
        controller.abort();
      };
    },
    [page],
  );

  const updateWatchList = (moviesArr) => {
    localStorage.setItem('watchList', JSON.stringify(moviesArr));
    setWatchList(moviesArr);
  };
  const value = React.useMemo(() => ({
    movies,
    setPage,
    watchList,
    updateWatchList,
    loader,
    setIsLogin,
    isLogin,
    setMovies,
    setLoader,
    page,
  }), [movies, watchList, page, loader, isLogin]);
  return (

    <BrowserRouter>
      <div>

        <MovieContext.Provider value={value}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            {console.log('here', isLogin)}
            <Route path="/watchList" element={<WatchListComp />} />
          </Routes>
        </MovieContext.Provider>
      </div>
    </BrowserRouter>

  );
}

export default App;
