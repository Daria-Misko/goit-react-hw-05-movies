import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fatchApi';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import noImage from '../img/No_Image.webp';
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

  // console.log(cast);

  return (
    <>
      {isLoading && <Loader />}
      <CastContainer>
        {cast &&
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

                <CastCardName>Name: {original_name}</CastCardName>
                <CastCardName>Character: {character}</CastCardName>
              </CastCardItem>
            );
          })}
      </CastContainer>
    </>
  );
};

export default Cast;
