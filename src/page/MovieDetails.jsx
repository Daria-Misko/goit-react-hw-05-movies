import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fatchApi';
import { toast } from 'react-toastify';
import MovieDescr from 'components/MovieDescr/MovieDescr';
import Loader from 'components/Loader/Loader';
import {
  AdditinalList,
  ItemLink,
  ItemLinkBack,
  MoveDitailsContainer,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
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

  return (
    <MoveDitailsContainer>
      <ItemLinkBack to={backLinkHref} state={{ from: location }}>
        Back
      </ItemLinkBack>
      {isLoading && <Loader />}
      {movieDetails && <MovieDescr movieDetails={movieDetails} />}
      <div>
        <AdditinalList>
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
        </AdditinalList>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </MoveDitailsContainer>
  );
};

export default MovieDetails;
