import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;

const StyledWrapper = styled.div`
  margin: 50px 50px;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;
