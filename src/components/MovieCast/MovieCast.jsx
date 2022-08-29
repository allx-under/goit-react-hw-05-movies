import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/API';
import styled from 'styled-components';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await getMovieCredits(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, [id]);
  return (
    <StyledList>
      {cast.map(({ character, id, name, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4='
            }
            alt={name}
            width="100px"
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </StyledList>
  );
};

export default MovieCast;

const StyledList = styled.ul`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  grid-auto-rows: auto;

  grid-gap: 1rem;
  list-style: none;
`;
