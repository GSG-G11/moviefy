import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
import MovieCard from './Component/MovieCard';
import MovieDetails from './Component/MovieDetails';
import WatchList from './Component/WatchList';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      const controller = new AbortController();
      const { signal } = controller;
      const API_LINK = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&&api_key=e4e72d82643e224bf78695be0b5602cd&page=${page}`;
      const watchListforStorge = JSON.parse(localStorage.getItem('watchList')) || [];
      setWatchList(watchListforStorge);
      fetch(API_LINK, { signal })
        .then((res) => res.json())
        .then(({ results }) => setMovies(results))
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
  return (
    <BrowserRouter>
      <div>
        <Nav setMovies={setMovies} />
        <Routes>
          <Route path="/" element={<MovieCard data={movies} setPage={setPage} watchList={watchList} />} />
          <Route path="/movie/:movieId" element={<MovieDetails movies={movies} updateWatchList={updateWatchList} watchList={watchList} />} />
          <Route path="/watchList" element={<WatchList data={watchList} setPage={setPage} watchList={watchList} updateWatchList={updateWatchList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
