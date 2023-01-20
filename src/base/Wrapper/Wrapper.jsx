import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;

const StyledWrapper = styled.div`
  margin: 50px 50px 0;
  padding: 5px 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 37%,
    rgba(167, 167, 167, 0.8) 82%
  );
  border-radius: 10px;
`;
