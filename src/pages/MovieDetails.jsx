import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Details } from './pages.styled';
import { getDetails } from '../Util/api';
import Poster from '../components/Poster';

function MovieDetails() {
  const [details, setDetails] = useState(null);

  const {
    poster_path = '',
    original_title = '',
    name = '',
    release_date = '',
    genres = '',
    overview = '',
  } = details ?? {};

  const location = useLocation();
  const comeBack = useRef(location.state?.from || '/');

  const { id } = useParams();
  useEffect(() => {
    getDetails(id).then(setDetails);
  }, [id]);

  return !details ? (
    <p>Don't find this movies</p>
  ) : (
    <Details>
      <p>
        <Link to={comeBack.current}>Go back</Link>
      </p>
      <article className="card">
        <Poster width={200} url={poster_path} alt={name}></Poster>
        <div className="subscribe">
          <h2>
            {original_title}
            <span> ({release_date.substring(0, 4)})</span>
          </h2>
          <h3>
            Genries:
            <span> {genres.map(({ name }) => name).join(', ')}</span>
          </h3>

          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
      </article>
      <hr />
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </Details>
  );
}

export default MovieDetails;
