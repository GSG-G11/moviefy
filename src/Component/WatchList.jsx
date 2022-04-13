import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function WatchList({ watchList }) {
  console.log(watchList);
  return (
    <MovieCard data={watchList} />
  );
}

WatchList.propTypes = {
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
