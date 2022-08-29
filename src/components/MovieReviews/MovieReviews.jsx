import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/API';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews();
  }, [id]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
