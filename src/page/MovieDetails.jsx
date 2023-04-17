import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fatchApi';
import { toast } from 'react-toastify';
import MovieDescr from 'components/MovieDescr/MovieDescr';

const MovieDetails = () => {
  const [movieDetails, setMovieDeatils] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        const { results } = await getMovieDetails(movieId);
        if (!results) {
          return toast.error('No Movie Details');
        }
        setMovieDeatils(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      <div>MovieDetails</div>
      <MovieDescr movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetails;
