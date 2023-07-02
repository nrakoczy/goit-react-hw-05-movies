import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ReviewStyled } from './Reviews.styled';
import PropTypes from 'prop-types';
import { getReview } from '../../Util/api';

function Reviews() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    getReview(id)?.then(setReview);
  }, [id, review?.length]);

  return (
    <ReviewStyled>
      <h3>Reviews:</h3>
      <ul>
        {review?.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          review?.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>Content: {content}</p>
              <br />
              <br />
            </li>
          ))
        )}
      </ul>
    </ReviewStyled>
  );
}

Reviews.propTypes = {
  width: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Reviews;
