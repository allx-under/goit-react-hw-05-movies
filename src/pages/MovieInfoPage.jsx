import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

import { getMovieInfo } from 'service/API';
import Loader from 'service/Loader';

const MovieInfoPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/movies';

  const goBack = () => {
    navigate(from);
  };

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        setLoading(true);
        const data = await getMovieInfo(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <StyledBtn onClick={goBack} type="button">
        Go Back
      </StyledBtn>
      <Wrapper>
        {poster_path && (
          <StyledImg
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={original_title}
            width="300px"
          />
        )}
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
              <Link state={{ from }} to="cast">
                Cast
              </Link>
            </li>
            <li>
              {' '}
              <Link state={{ from }} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
      <hr />
      <Outlet />
    </>
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

const StyledBtn = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
  margin-left: 10px;
  margin-top: 5px;
  padding: 5px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  &:hover {
    color: black;
    background: linear-gradient(to bottom, #e8edec, #d2d1d3);
  }
`;
