import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/MovieDetails.css';
import MovieContext from '../assets/context/moviesContext';

function MovieDetails() {
  const {
    movies, updateWatchList, watchList,
  } = React.useContext(MovieContext);
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
        <img className="imgDetails" src={(ImgApi + movieDetails.poster_path) || ''} alt={movieDetails.title} />
      </div>
      <div className="Details">
        <div className="detailsHeader">
          <h2>
            {movieDetails.title}
          </h2>
          <p>{movieDetails.vote_average}</p>
        </div>
        { watchList.find((item) => item.id === movieDetails.id)
          ? (
            <button
              className="removeBtn"
              type="submit"
              onClick={() => {
                updateWatchList(watchList.filter((item) => item.id !== movieDetails.id));
              }}
            >
              Remove from my WatchLis
            </button>
          )
          : <button className="addBtn" type="submit" onClick={() => updateWatchList([...watchList, movieDetails])}>Add to my WatchList</button>}

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

export default MovieDetails;
