import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesByName } from 'service/API';
import Loader from 'service/Loader';

import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const onSubmitSetParams = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMoviesByName(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchForm onSubmit={onSubmitSetParams} />
      <MovieList items={movies} />
    </>
  );
};

export default MoviesPage;
