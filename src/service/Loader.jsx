import { Puff } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <Puff height="100" width="100" color="black" />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
