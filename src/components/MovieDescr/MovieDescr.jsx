import { Link, useLocation } from 'react-router-dom';
import noImage from '../img/No_Image.webp';

const MovieDescr = ({ movieDetails }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movieDetails;
  const location = useLocation();

  const date = new Date(release_date);
  const movieYear = date.getFullYear();

  const votePercentage = (vote_average * 10).toFixed(0);

  return (
    <>
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : noImage
            }
            alt={title}
          />
        </div>
        <div>
          <p>{title ? `${title} (${movieYear})` : `Name of movie not found`}</p>
          <p>User Score: {votePercentage}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDescr;
