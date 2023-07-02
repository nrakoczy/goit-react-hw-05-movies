import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CastStyled } from './Cast.styled';
import { getCast } from '../../Util/api';
import Poster from '../Poster';

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await getCast(id);
      setCasts(castData);
    };

    fetchCast();
  }, [id]);

  return casts ? (
    <CastStyled>
      <h2>Cast:</h2>
      <ul>
        {casts.length === 0 ? (
          <p>We don't have any casts for this movie</p>
        ) : (
          casts.map(({ profile_path, name, character, cast_id }) => (
            <li className="thumb-cast" key={cast_id}>
              <p>Character: {character || 'none'}</p>
              <p>Name: {name || 'none'}</p>
              <Poster width={100} url={profile_path} alt={name} />
              <br />
            </li>
          ))
        )}
      </ul>
    </CastStyled>
  ) : null;
}

Cast.propTypes = {
  width: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Cast;
