import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ListMovies from '../components/ListMovies/ListMovies';
import { getTrends } from '../Util/api';

function Home() {
  const [trendes, setTrendes] = useState(null);

  useEffect(() => {
    getTrends().then(setTrendes);
  }, []);

  return (
    <div>
      <h2>Today's Trends</h2>
      {trendes ? <ListMovies list={trendes} /> : <p>Loading trends...</p>}
    </div>
  );
}

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Home;
