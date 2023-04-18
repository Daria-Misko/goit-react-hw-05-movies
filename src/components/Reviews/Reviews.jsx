import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fatchApi';
import { toast } from 'react-toastify';
import { Author, ReviewItem, Text } from './Reviews.styles';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieReviews(movieId);
        if (!results) {
          return toast.error('No Cast Information');
        }
        setReviews(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <ReviewItem key={id}>
              <Author>{author}</Author>
              <Text>{content}</Text>
            </ReviewItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
