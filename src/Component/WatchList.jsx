import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './css/WatchList.css';

function WatchList({ watchList, setPage, updateWatchList }) {
  return (
    <div>
      <h1 className="watchListTitle">MY WATCHLIST</h1>
      <MovieCard
        data={watchList}
        setPage={setPage}
        fromWatchList
        updateWatchList={updateWatchList}
      />
    </div>
  );
}

WatchList.propTypes = {
  setPage: PropTypes.func.isRequired,
  updateWatchList: PropTypes.func.isRequired,
  watchList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  })),
};
WatchList.defaultProps = {
  watchList: [{}],
};
export default WatchList;
