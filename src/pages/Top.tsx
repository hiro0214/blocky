import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { Window } from '../components/Window';

export const Top = () => {
  const navigate = useNavigate();

  const onclickEnter = () => navigate('/select');

  return (
    <Window>
      <Title text={'Blocky'} />
      <_Wrapper>
        <Button label={'ENTER'} color={'green'} onclick={onclickEnter} />
      </_Wrapper>
    </Window>
  );
};

const _Wrapper = styled.div`
  margin-top: 100px;
`;
