import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/API';
import Loader from 'service/Loader';
import styled from 'styled-components';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCredits(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <StyledList>
      {cast.map(({ character, id, name, profile_path }) => (
        <li key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="150px"
            />
          ) : (
            <img
              src={
                'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4='
              }
              alt={name}
              width="150px"
            />
          )}
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
