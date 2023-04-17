import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'page/Home';
import MovieDetails from 'page/MovieDetails';
import Movies from 'page/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
