import { FC, memo } from 'react';
import styled from 'styled-components';
import enemyData from '../enemy.json';

type Props = {
  id: number;
  direction: 'up' | 'left' | 'right' | 'down';
};

export const Enemy: FC<Props> = memo((Props) => {
  const { id, direction } = Props;

  const enemy = enemyData.find((v) => v.id === id);

  if (!enemy) return null;

  const img =
    direction === 'up'
      ? enemy.up
      : direction === 'left'
      ? enemy.left
      : direction === 'right'
      ? enemy.right
      : direction === 'down'
      ? enemy.down
      : '';

  return <EnemyElement src={img} />;
});

const EnemyElement = styled.img`
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
`;
