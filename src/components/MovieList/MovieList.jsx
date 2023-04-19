import { useLocation } from 'react-router-dom';
import noImageTwo from '../img/noImage_two.jpeg';
import PropTypes from 'prop-types';
import 'animate.css';

import {
  ImgWrapper,
  List,
  MovieItem,
  Poster,
  StyledLink,
  Title,
} from './MovieList.styles';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List className="animate__animated animate__fadeIn">
      {films.map(film => (
        <MovieItem key={film.id}>
          {film.title && (
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              <ImgWrapper>
                <Poster
                  src={
                    film.poster_path
                      ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                      : noImageTwo
                  }
                  alt={film.title}
                />
              </ImgWrapper>
              <Title>{film.title}</Title>
            </StyledLink>
          )}
        </MovieItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};

export default MovieList;
