import { Link } from 'react-router-dom';
import noImage from '../img/No_Image.webp';

const MovieDescr = ({ movieDetails }) => {
  const {
    poster_path,
    backdrop_path,
    release_date,
    title,
    vote_average,
    overview,
    genres,
  } = movieDetails;
  // const imageUrl = poster_path
  //   ? `https://image.tmdb.org/t/p/w300${poster_path}`
  //   : noImage;
  return (
    <>
      <Link href="#">Back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : noImage
          }
          alt={title}
        />
        <p>{title ? `${title}` : `No title`}</p>
      </div>
    </>
  );
};

export default MovieDescr;

// сделать дефолтную картинку
