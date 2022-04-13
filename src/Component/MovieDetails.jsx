import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/MovieDetails.css';
import { Button, Image } from '../eleComponent';
import MovieContext from '../context/moviesContext';

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
        <Image className="imgDetails" src={(ImgApi + movieDetails.poster_path) || ''} alt={movieDetails.title} />
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
            <Button
              className="removeBtn"
              handleFunc={() => {
                updateWatchList(watchList.filter((item) => item.id !== movieDetails.id));
              }}
              title=" Remove from my WatchLis"
            />
          )
          : <Button className="addBtn" type="submit" handleFunc={() => updateWatchList([...watchList, movieDetails])} title="Add to my WatchList" />}

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
