import styled from 'styled-components';
import { Router } from '../routers/Router';

export const Layout = () => {
  return (
    <_Main>
      <_Container>
        <Router />
      </_Container>
    </_Main>
  );
};

const _Main = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const _Container = styled.div`
  width: 1000px;
  height: 650px;
`;
