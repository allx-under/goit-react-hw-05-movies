import React, { useEffect, useState } from 'react';
import { getMoviesByName } from 'service/API';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const onSubmitSetParams = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getMoviesByName(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={onSubmitSetParams} />
      <MovieList items={movies} />
    </>
  );
};

export default MoviesPage;
