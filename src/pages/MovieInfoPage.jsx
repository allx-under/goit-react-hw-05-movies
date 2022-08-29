import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieInfo } from 'service/API';
import styled from 'styled-components';

const MovieInfoPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const data = await getMovieInfo(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
      //   setMovie(data)
    };

    fetchMovieInfo();
  }, [id]);
  const {
    genres,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
  } = movie;
  console.log(genres);
  return (
    <Wrapper>
      <StyledImg
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
        width="300px"
      />
      <div>
        <h2>
          {original_title} ({release_date?.slice(0, 4)})
        </h2>
        <p>
          <b>Overview:</b> {overview}
        </p>
        <b>Genres:</b>
        <ul>
          {genres?.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
        <p>
          <b>Rate:</b> {popularity?.toFixed(1)}
        </p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            {' '}
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default MovieInfoPage;

const Wrapper = styled.div`
  display: flex;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  margin: 10px;
  margin-right: 20px;
`;
