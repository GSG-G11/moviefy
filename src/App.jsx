import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
// import MovieCard from './Component/MovieCard';
import MovieDetails from './Component/MovieDetails';
import MovieContext from './assets/context/moviesContext';
import Home from './Component/Home';
import WatchListComp from './Component/WatchListComp';
import NotFound from './Component/Errors/404';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();
      const { signal } = controller;
      const API_LINK = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&&api_key=e4e72d82643e224bf78695be0b5602cd&page=${page}`;
      const watchListforStorge = JSON.parse(localStorage.getItem('watchList')) || [];
      setWatchList(watchListforStorge);
      fetch(API_LINK, { signal })
        .then((res) => res.json())
        .then(({ results }) => { setMovies(results); setLoader(false); })
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
    movies, setPage, watchList, updateWatchList, loader,
  }), [movies, watchList, page, loader]);

  return (

    <BrowserRouter>
      <div>
        <Nav setMovies={setMovies} />
        <MovieContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/watchList" element={<WatchListComp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MovieContext.Provider>
      </div>
    </BrowserRouter>

  );
}

export default App;
