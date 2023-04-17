import { Link } from 'react-router-dom';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          {film.title && (
            <Link to={`/movies/${film.id}`}>
              <h3>{film.title}</h3>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
