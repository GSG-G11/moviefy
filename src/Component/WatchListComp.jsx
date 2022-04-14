import React from 'react';
import { Navigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import './css/WatchList.css';
import MovieContext from '../context/moviesContext';

function WatchListComp() {
  const { watchList, isLogin } = React.useContext(MovieContext);

  return (

    <div>
      {isLogin
        ? (
          <>
            <h1 className="watchListTitle">MY WATCHLIST</h1>
            <MovieCard
              data={watchList}
              fromWatchList
            />
          </>
        ) : <Navigate to="/login" />}
    </div>
  );
}

export default WatchListComp;
