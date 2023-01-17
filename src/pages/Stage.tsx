import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Cell } from '../components/Cell';
import { useStage } from '../hooks/useStage';

export const Stage = () => {
  const { stageData, enemyData, init } = useStage();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    params.id && init(params.id);
  }, [params]);

  return (
    <_Container>
      <_StageWrapper>
        <_Stage>
          <tbody>
            {[...Array(stageData.length)].map((_, i) => (
              <tr key={i}>
                {[...Array(stageData[i].length)].map((_, j) => (
                  <Cell key={j} coordinate={[j, i]} value={stageData[i][j]} enemies={enemyData} />
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
