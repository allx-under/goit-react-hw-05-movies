import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));
  if (items.length === 0) {
    return <h2>Wrong request. Please provide correct movie information</h2>;
  }
  return <ol>{elements}</ol>;
};

export default MovieList;

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
