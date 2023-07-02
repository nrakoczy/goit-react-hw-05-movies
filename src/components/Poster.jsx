import portrait from '../portrait.jpeg';
const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';

function Poster({ url, alt, width }) {
  return (
    <img width={width} src={url ? BASE_POSTER + url : portrait} alt={alt} />
  );
}
export default Poster;
