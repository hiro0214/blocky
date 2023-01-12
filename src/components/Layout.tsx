import styled from 'styled-components';
import { Router } from '../routers/Router';

export const Layout = () => {
  return (
    <Main>
      <Container>
        <Router />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Container = styled.div`
  width: 1200px;
  height: 650px;
`;
