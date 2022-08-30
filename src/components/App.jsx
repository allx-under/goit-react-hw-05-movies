import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Container = lazy(() => import('base/Container/Container'));
const Wrapper = lazy(() => import('base/Wrapper/Wrapper'));
const NavBar = lazy(() => import('./NavBar/NavBar'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieInfoPage = lazy(() => import('pages/MovieInfoPage'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));

export const App = () => {
  return (
    <Suspense fallback={null}>
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
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
        </Wrapper>
      </Container>
    </Suspense>
  );
};
