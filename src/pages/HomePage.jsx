import React, { useEffect, useState } from 'react';

import { getTrendMovies } from 'service/API';
import Loader from 'service/Loader';

import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(false);
        const { results } = await getTrendMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <h2>Trending today</h2>
      <MovieList items={movies} />
    </>
  );
};

export default HomePage;
