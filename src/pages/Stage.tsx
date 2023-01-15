import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Cell } from '../components/Cell';
import data from '../data.json';

type EnemyType = {
  id: number;
  coordinate: [number, number];
  direction: 'up' | 'left' | 'right' | 'down';
};

type StageType = {
  id: string;
  stage: number[][];
  enemy: EnemyType[];
};

const initialStageData: StageType = {
  id: '',
  stage: [[]],
  enemy: [],
};

export const Stage = () => {
  const [stageData, setStage] = useState<StageType>(initialStageData);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const stageData = data.find((v) => v.id === params.id) as StageType;
    setStage(stageData);
  }, [params]);

  return (
    <_Container>
      <_StageWrapper>
        <_Stage>
          <tbody>
            {[...Array(stageData.stage.length)].map((_, i) => (
              <tr key={i}>
                {[...Array(stageData.stage[i].length)].map((_, j) => (
                  <Cell key={j} value={stageData.stage[i][j]} />
                ))}
              </tr>
            ))}
          </tbody>
        </_Stage>
      </_StageWrapper>

      <_Hoge></_Hoge>
    </_Container>
  );
};

const _Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 70px;
`;

const _StageWrapper = styled.div`
  padding: 10px;
  border: 5px solid #333;
  border-radius: 4px;
`;

const _Stage = styled.table`
  outline: solid 1px #64748b;
  border-collapse: separate;
`;

const _Hoge = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid #000;
`;
