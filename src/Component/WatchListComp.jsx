import React from 'react';
import MovieCard from './MovieCard';
import './css/WatchList.css';
import MovieContext from '../context/moviesContext';

function WatchListComp() {
  const { watchList } = React.useContext(MovieContext);
  return (
    <>
      <h1 className="watchListTitle">MY WATCHLIST</h1>
      <MovieCard
        data={watchList}
        fromWatchList
      />
    </>
  );
}

export default WatchListComp;
