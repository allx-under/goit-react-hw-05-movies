import axios from 'axios';

const API_KEY = '6fa4e59bc2ff4c4e723c5e57b4e6f0ea';

export const getTrendMovies = async () => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMoviesByName = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return data;
};

export const getMovieInfo = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
