import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { EnemyType } from '../types/stage';
import { Enemy } from './Enemy';

type Props = {
  coordinate: [number, number];
  value: number;
  enemies: EnemyType[];
};

export const Cell: FC<Props> = memo((Props) => {
  const { coordinate, value, enemies } = Props;

  const enemy = enemies.find((v) => v.coordinate[0] === coordinate[0] && v.coordinate[1] === coordinate[1]);
  let cell;

  if (value === 0) {
    cell = enemy ? (
      <_Cell_0>
        <Enemy id={enemy.id} direction={enemy.direction} />
      </_Cell_0>
    ) : (
      <_Cell_0 />
    );
  } else if (value === 1) {
    cell = <_Cell_1 />;
  } else if (value === 2) {
    cell = enemy ? (
      <_Cell_2>
        <Enemy id={enemy.id} direction={enemy.direction} />
      </_Cell_2>
    ) : (
      <_Cell_2 />
    );
  } else if (value === 3) {
    cell = <_Cell_3 />;
  } else if (value === 4) {
    cell = <_Cell_4 />;
  } else if (value === 5) {
    cell = <_Cell_5 />;
  } else {
    cell = <_Cell />;
  }

  return cell;
});

const _Cell = styled.td`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid #64748b;
  &::after {
    position: absolute;
  }
`;

const _CollapseCell = css`
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const _Cell_0 = styled(_Cell)``;

const _Cell_1 = styled(_Cell)`
  background: #111;
`;

const _Cell_2 = styled(_Cell)`
  &::after {
    content: '';
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #e2041b15;
    outline: 1px solid #e2041b;
    border-radius: 2px;
  }
`;

const _Cell_3 = styled(_Cell)`
  background: #e3e3e3;
  &::after {
    content: '1';
    color: #666;
    ${_CollapseCell}
  }
`;

const _Cell_4 = styled(_Cell)`
  background: #cccccc;
  &::after {
    content: '2';
    color: #555;
    ${_CollapseCell}
  }
`;

const _Cell_5 = styled(_Cell)`
  background: #b4b4b4;
  &::after {
    content: '3';
    color: #333;
    ${_CollapseCell}
  }
`;
