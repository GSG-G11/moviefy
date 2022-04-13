import React from 'react';
import MovieCard from './MovieCard';
import MovieContext from '../assets/context/moviesContext';

function Home() {
  const { movies, loader } = React.useContext(MovieContext);

  return (
    <div>
      {loader ? (
        <div className="container">
          <div className="loader" />
        </div>
      ) : <MovieCard data={movies} fromWatchList={false} />}
    </div>
  );
}

export default Home;
