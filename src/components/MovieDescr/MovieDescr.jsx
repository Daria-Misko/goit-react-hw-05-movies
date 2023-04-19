import PropTypes from 'prop-types';
import noImage from '../img/noImage_two.jpeg';

import {
  Description,
  ImgWrapper,
  MovieWrapper,
  Poster,
  Text,
} from './MovieDescr.styles';

const MovieDescr = ({ movieDetails }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movieDetails;
  const date = new Date(release_date);
  const movieYear = date.getFullYear();
  const votePercentage = (vote_average * 10).toFixed(0);

  return (
    <>
      <MovieWrapper>
        <ImgWrapper>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : noImage
            }
            alt={title}
          />
        </ImgWrapper>
        <Description>
          <Text>
            {title ? `${title} (${movieYear})` : `Name of movie not found`}
          </Text>
          <Text>User Score: {votePercentage}%</Text>
          <h2>Overview</h2>
          <Text>{overview}</Text>
          <h2>Genres</h2>
          <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
        </Description>
      </MovieWrapper>
    </>
  );
};

MovieDescr.propTypes = {
  films: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieDescr;
