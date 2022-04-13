import React from 'react';
import MovieCard from './MovieCard';
import MovieContext from '../assets/context/moviesContext';

function Home() {
  const { movies } = React.useContext(MovieContext);

  return (
    <div>
      <MovieCard data={movies} fromWatchList={false} />
    </div>
  );
}

export default Home;
