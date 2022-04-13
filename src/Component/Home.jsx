import React from 'react';
import MovieCard from './MovieCard';
import MovieContext from '../context/moviesContext';

function Home() {
  const { movies } = React.useContext(MovieContext);
  return <MovieCard data={movies} fromWatchList={false} />;
}

export default Home;
