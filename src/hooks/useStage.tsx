import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import { EnemyType, StageType } from '../types/stage';

export const useStage = () => {
  const [stageData, setStageData] = useState<number[][]>([]);
  const [enemyData, setEnemyData] = useState<EnemyType[]>([]);
  const navigate = useNavigate();

  const init = useCallback((id: string) => {
    const targetData = data.find((v) => v.id === id) as StageType | undefined;
    if (targetData) {
      const stage = targetData.stage;
      const enemies = targetData.enemy;
      setStageData(stage);
      setEnemyData(enemies);
    } else {
      navigate('/select');
    }
  }, []);

  return { stageData, enemyData, init };
};
