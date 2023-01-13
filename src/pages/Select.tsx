import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { Window } from '../components/Window';

const stageLength = 10;

export const Select = () => {
  const [stage, setStage] = useState('1');
  const navigage = useNavigate();

  const onchangeStage = (e: ChangeEvent<HTMLSelectElement>) => setStage(e.target.value);

  const onclickStart = () => navigage(`/stage/${stage}`);

  return (
    <Window>
      <Title text={'STAGE SELECT'} />
      <_Text>ステージを選択してください</_Text>
      <_Select name={'stage'} onChange={(e) => onchangeStage(e)} value={stage}>
        {[...Array(stageLength)].map((_, i) => (
          <option key={i} value={i + 1}>
            Stage {i + 1}
          </option>
        ))}
      </_Select>
      <Button label={'START'} color={'green'} onclick={onclickStart} />
    </Window>
  );
};

const _Text = styled.p`
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
`;

const _Select = styled.select`
  display: block;
  width: 140px;
  margin: 20px auto 60px;
  font-size: 20px;
  padding: 12px 16px;
  border: 1px solid #64748b;
  border-radius: 4px;
  text-align: center;
`;
