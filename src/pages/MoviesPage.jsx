import React from 'react';
import styled from 'styled-components';
import SearchLogo from '../imgs/search.svg';
const MoviesPage = () => {
  return (
    <InputForm>
      <StyledInput
        type="input"
        placeholder="Name"
        name="movie"
        id="movie"
        required
        autoComplete="off"
      />
      <StyledLabel for="movie">Movie</StyledLabel>
      <StyledButton type="submit">
        <img src={SearchLogo} alt="" width="20px" height="20px" />
      </StyledButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 300px;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 260px;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: black;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;
export default MoviesPage;
