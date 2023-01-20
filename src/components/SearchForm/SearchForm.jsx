import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SearchLogo from '../../imgs/search.svg';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <InputForm onSubmit={onSubmitSearch}>
      <StyledInput
        onChange={onChange}
        type="input"
        placeholder="Name"
        id="movie"
        required
        autoComplete="off"
        value={query}
      />
      <StyledLabel htmlFor="movie">Movie</StyledLabel>
      <StyledButton type="submit">
        <img src={SearchLogo} alt="search-icon" width="20px" height="20px" />
      </StyledButton>
    </InputForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

const InputForm = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 400px;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 365px;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  color: #645a56;
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
export default SearchForm;
