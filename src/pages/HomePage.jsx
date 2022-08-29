import React, { useEffect, useState } from 'react';
import { getTrendMovies } from 'service/API';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await getTrendMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList items={movies} />
    </>
  );
};

export default HomePage;
