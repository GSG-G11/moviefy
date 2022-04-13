import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieContext from '../context/moviesContext';
import Pagenation from './Pagenation';
import './css/movieCard.css';
import { Button, Image } from '../eleComponent';

const ImgApi = 'https://image.tmdb.org/t/p/w1280';
function MovieCard({ fromWatchList, data }) {
  const {
    setPage, updateWatchList,
  } = React.useContext(MovieContext);
  return (
    data.length
      ? (
        <div>
          <div className="container">
            {data.map(({
              title, id, vote_average: voteAverage, poster_path: path,
            }) => (

              <div key={id} className="movieCard">
                <div className="cardImg">
                  <Link to={`/movie/${id}`}>
                    <Image src={ImgApi + path} alt={title} />
                  </Link>
                </div>
                <h5 className="title_movie">{title}</h5>
                <p className="vote_average">{voteAverage}</p>
                {fromWatchList
                  ? (
                    <Button
                      className="removeFromListBtn"
                      type="submit"
                      title="Remove From Watch List"
                      handleFunc={() => updateWatchList(data.filter((item) => item.id !== id))}
                    />

                  )
                  : null}
              </div>

            ))}

            {!fromWatchList
              ? <Pagenation setPage={setPage} />
              : null}
          </div>
        </div>
      )
      : <p className="no-result">NO Results Found</p>
  );
}

MovieCard.propTypes = {
  fromWatchList: PropTypes.bool.isRequired,
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
