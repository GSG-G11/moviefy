import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
import Movies from './Component/Movies';

const API_LINK = 'http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=e4e72d82643e224bf78695be0b5602cd&page=1';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      fetch(API_LINK)
        .then((res) => res.json())
        .then(({ results }) => setMovies(results))
        .catch((err) => console.log(err));
    },
    [],
  );
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Movies data={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
