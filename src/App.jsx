import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
import MovieCard from './Component/MovieCard';
import MovieDetails from './Component/MovieDetails';
import WatchList from './Component/WatchList';

const API_LINK = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&&api_key=e4e72d82643e224bf78695be0b5602cd&page=1';
function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(
    () => {
      const watchListforStorge = JSON.parse(localStorage.getItem('watchList'));
      console.log(watchList);
      setWatchList(watchListforStorge);
      fetch(API_LINK)
        .then((res) => res.json())
        .then(({ results }) => setMovies(results))
        .catch((err) => console.log(err));
    },
    [],
  );
  const updateWatchList = (movieDetails) => {
    setWatchList([...watchList, movieDetails]);
  };
  /* useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);
  console.log('the watch', watchList); */
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<MovieCard data={movies} />} />
          <Route path="/movie/:movieId" element={<MovieDetails movies={movies} updateWatchList={updateWatchList} />} />
          <Route path="/watchList" element={<WatchList watchList={watchList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
