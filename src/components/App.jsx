import NavBar from './NavBar/NavBar';
import Container from 'base/Container/Container';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Wrapper from 'base/Wrapper/Wrapper';

export const App = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
        </Routes>
      </Wrapper>
    </Container>
  );
};
