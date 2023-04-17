import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSearchMovie } from 'services/fatchApi';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultMovieList, setResultMovieList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.error('Please enter a request! ');
    }
    setQuery(inputValue);
  };

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

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <h2>Movies</h2>
      <SearchBar onSubmit={handleSubmit} onChange={handleInputChange} />
      <MovieList films={resultMovieList} />
      {isLoading && <Loader />}
      {/* <Outlet /> */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};
export default Movies;
