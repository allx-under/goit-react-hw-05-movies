import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieList = ({ items, query }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, name, poster_path }) => (
    <li key={id}>
      <StyledLink state={{ from: location }} to={`/movies/${id}`}>
        <StyledPoster
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title || name}
          width="600px"
        />
        <StyledTitle>{title || name}</StyledTitle>
      </StyledLink>
    </li>
  ));
  if (query === null) {
    return <h2>Please specify movie above</h2>;
  } else if (items.length === 0) {
    return <h2>Wrong request. Please provide correct movie information</h2>;
  }
  return <StyledList>{elements}</StyledList>;
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

const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  background-image: conic-gradient(
    #553c9a 0%,
    #553c9a 33%,
    #ee4b2b 33%,
    #ee4b2b 66%,
    #00c2cb 66%,
    #00c2cb 99%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledPoster = styled.img`
  border-radius: 15px;
`;

const StyledList = styled.ul`
  list-style: none;
`;
