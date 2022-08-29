import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));
  return <ol>{elements}</ol>;
};

export default MovieList;
