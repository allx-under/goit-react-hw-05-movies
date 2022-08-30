import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));
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
