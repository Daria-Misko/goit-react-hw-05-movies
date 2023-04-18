import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

export const App = () => {
  const Home = lazy(() => import('page/Home'));
  const MovieDetails = lazy(() => import('page/MovieDetails'));
  const Movies = lazy(() => import('page/Movies'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
