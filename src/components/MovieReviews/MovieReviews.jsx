import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'service/API';
import Loader from 'service/Loader';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (reviews.length === 0) {
    return <h3>There is no reviews yet</h3>;
  }
  if (reviews) {
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
  }
};

export default MovieReviews;
