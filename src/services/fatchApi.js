import axios from 'axios';

const KEY = '58e9cbeb11d69aa820ec44a871560ce5';
const URL = 'https://api.themoviedb.org/3';

const getPopularMovies = async () => {
  const apiConfig = `${URL}/trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(apiConfig);
  return response.data;
};

const getSearchMovie = async query => {
  const apiConfig = `${URL}/search/movie?api_key=${KEY}&query=${query}&page=1`;
  const response = await axios.get(apiConfig);
  console.log(response.data);
  return response.data;
};

const getMovieDetails = async movieId => {
  const apiConfig = `${URL}/movie/${movieId}?api_key=${KEY}`;
  const response = await axios.get(apiConfig);
  console.log(response.data);
  return response.data;
};

export { getPopularMovies, getSearchMovie, getMovieDetails };
