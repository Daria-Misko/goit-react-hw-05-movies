import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSearchMovie } from 'services/fatchApi';
import Loader from 'components/Loader/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';
import { HomeTitle } from './Home.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultMovieList, setResultMovieList] = useState([]);
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nextParams = inputValue !== '' ? { query: inputValue } : {};

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    setQuery(query);
  }, [searchParams]);

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getSearchMovie(query);
        if (results.length === 0) {
          return toast.error('No Movies');
        }
        setResultMovieList(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.error('Please enter a request! ');
    }
    setQuery(inputValue);
    setSearchParams(nextParams);
  };

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <HomeTitle>Movies</HomeTitle>
      <SearchBar
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={inputValue}
      />
      <MovieList films={resultMovieList} state={location} />
      {isLoading && <Loader />}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};
export default Movies;
