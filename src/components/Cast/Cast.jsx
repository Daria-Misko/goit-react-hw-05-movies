import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fatchApi';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import noImage from '../img/Unknown_person.jpeg';
import { CastCardItem, CastCardName, CastContainer } from './Cast.styles';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieCast(movieId);
        if (!results) {
          return toast.error('No Cast Information');
        }
        setCast(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <CastContainer>
        {cast.length !== 0 ? (
          cast.map(({ character, id, original_name, profile_path }) => {
            return (
              <CastCardItem key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : noImage
                  }
                  alt={original_name}
                  height="200"
                />

                <CastCardName>
                  Name: <span>{original_name}</span>
                </CastCardName>
                <CastCardName>
                  Character: <span>{character}</span>
                </CastCardName>
              </CastCardItem>
            );
          })
        ) : (
          <p>Sorry, We don't have any cast information for this movie.</p>
        )}
      </CastContainer>
    </>
  );
};

export default Cast;
