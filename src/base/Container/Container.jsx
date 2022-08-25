import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  background: url('https://hdqwalls.com/download/stranger-things-season-3-2019-4k-5k-38-1920x1080.jpg')
    center / cover no-repeat;
  height: 100vh;
  margin: 0 auto;
`;
