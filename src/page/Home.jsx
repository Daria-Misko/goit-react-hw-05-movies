import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'services/fatchApi';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPopularMovies();
        setFilms(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {films.length !== 0 && <MovieList films={films} location={location} />}
    </>
  );
};

export default Home;
