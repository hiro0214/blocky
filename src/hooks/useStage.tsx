import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import { EnemyType, StageType } from '../types/stage';

export const useStage = () => {
  const [stageData, setStageData] = useState<number[][]>([]);
  const [enemyData, setEnemyData] = useState<EnemyType[]>([]);
  const timerId = useRef<number>();
  const navigate = useNavigate();

  const initStage = useCallback((id: string) => {
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

  const checkDirection = useCallback((stage: number[][], enemy: EnemyType) => {
    const direction = enemy.directionValue[enemy.currentDirection];
    const coordinate = [...enemy.coordinate];

    let directionEnd = false;
    if (direction === 'up') {
      coordinate[1] === 0 ? (directionEnd = true) : (coordinate[1] -= 1);
    } else if (direction === 'left') {
      coordinate[0] === 0 ? (directionEnd = true) : (coordinate[0] -= 1);
    } else if (direction === 'right') {
      coordinate[0] === stage[0].length - 1 ? (directionEnd = true) : (coordinate[0] += 1);
    } else if (direction === 'down') {
      coordinate[1] === stage.length - 1 ? (directionEnd = true) : (coordinate[1] += 1);
    }

    const cellValue = stage[coordinate[1]][coordinate[0]];
    if (directionEnd || (cellValue !== 0 && cellValue !== 2)) {
      if (enemy.currentDirection === enemy.directionValue.length - 1) {
        enemy.currentDirection = 0;
      } else {
        enemy.currentDirection += 1;
      }
    }
  }, []);

  const toUp = useCallback((enemy: EnemyType) => (enemy.coordinate[1] -= 1), []);

  const toLeft = useCallback((enemy: EnemyType) => (enemy.coordinate[0] -= 1), []);

  const toRight = useCallback((enemy: EnemyType) => (enemy.coordinate[0] += 1), []);

  const toDown = useCallback((enemy: EnemyType) => (enemy.coordinate[1] += 1), []);

  const moveEnemy = useCallback(
    (enemy: EnemyType) => {
      const direction = enemy.directionValue[enemy.currentDirection];

      // その方向に進めるか判定する[WIP]
      //
      if (direction === 'up') toUp(enemy);
      else if (direction === 'left') toLeft(enemy);
      else if (direction === 'right') toRight(enemy);
      else if (direction === 'down') toDown(enemy);

      checkDirection(stageData, enemy);
    },
    [stageData]
  );

  const gameComplete = useCallback(() => {
    setTimeout(() => {
      alert('GAME CLEAR!!');
      clearInterval(timerId.current);
      timerId.current = undefined;
      navigate('/result');
    }, 100);
  }, []);

  const checkGoal = useCallback(() => {
    const cellValues = enemyData.map((enemy) => stageData[enemy.coordinate[1]][enemy.coordinate[0]]);
    if (cellValues.every((v) => v === 2)) gameComplete();
  }, [enemyData]);

  const turn = useCallback(() => {
    enemyData.map((enemy) => moveEnemy(enemy));
    setEnemyData([...enemyData]);
    checkGoal();
  }, [enemyData]);

  const start = useCallback(() => {
    timerId.current = setInterval(() => {
      turn();
    }, 500);
  }, [enemyData]);

  return { stageData, enemyData, initStage, start };
};
