import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          {film.title && (
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <h3>{film.title}</h3>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
