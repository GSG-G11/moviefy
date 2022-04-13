import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/movieCard.css';

const ImgApi = 'https://image.tmdb.org/t/p/w1280';
function MovieCard({ data }) {
  return (
    <div className="container">
      {data.map(({
        title, id, vote_average: voteAverage, poster_path: path,
      }) => (

        <div key={id} className="movieCard">
          <div className="cardImg">
            <Link to={`/movie/${id}`}>
              <img src={ImgApi + path} alt={title} />
            </Link>
          </div>
          <h5 className="title_movie">{title}</h5>
          <p className="vote_average">{voteAverage}</p>
        </div>

      ))}
    </div>
  );
}

MovieCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  })),
};
MovieCard.defaultProps = {
  data: [{}],
};

export default MovieCard;
