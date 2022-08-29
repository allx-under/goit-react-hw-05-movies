import NavBar from './NavBar/NavBar';
import Container from 'base/Container/Container';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieInfoPage from 'pages/MovieInfoPage';
import Wrapper from 'base/Wrapper/Wrapper';
import MovieReviews from './MovieReviews/MovieReviews';
import MovieCast from './MovieCast/MovieCast';

export const App = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Wrapper>
    </Container>
  );
};
