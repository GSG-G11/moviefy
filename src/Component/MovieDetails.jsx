import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/MovieDetails.css';

function MovieDetails({ movies, updateWatchList }) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const ImgApi = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    const Details = movies.find(({ id }) => id === Number(movieId));
    setMovieDetails(Details);
  }, []);
  return (

    <div className="DetailsContainer">
      <div>
        <img className="imgDetails" src={ImgApi + movieDetails.poster_path} alt={movieDetails.title} />
      </div>
      <div className="Details">
        <div className="detailsHeader">
          <h2>
            {movieDetails.title}
          </h2>
          <p>{movieDetails.vote_average}</p>
        </div>
        <button className="addBtn" type="submit" onClick={() => updateWatchList(movieDetails)}>Add to my WatchList</button>

        {/* backdrop_path */}
        <p>{movieDetails.overview}</p>
        <h4>

          {'Release date:  '}

          {movieDetails.release_date}
        </h4>

      </div>
    </div>
  );
}
MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  })),
  updateWatchList: PropTypes.func.isRequired,
};
MovieDetails.defaultProps = {
  movies: [],

};

export default MovieDetails;
