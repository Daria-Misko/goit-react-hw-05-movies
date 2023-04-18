import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fatchApi';
import { toast } from 'react-toastify';
import MovieDescr from 'components/MovieDescr/MovieDescr';
import Loader from 'components/Loader/Loader';
import { ItemLink } from './MovieDetails.styles';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieDetails(movieId);
        if (!results) {
          return toast.error('No Movie Details');
        }
        setMovieDetails(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getDetails();
  }, [movieId]);

  console.log(location);

  return (
    <>
      <Link to={backLinkHref} state={{ from: location }}>
        Back
      </Link>
      <div>MovieDetails</div>
      {isLoading && <Loader />}
      {movieDetails && <MovieDescr movieDetails={movieDetails} />}
      <div>
        <ul>
          <li>
            <ItemLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </ItemLink>
          </li>
          <li>
            <ItemLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </ItemLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
