export type DirectionType = 'up' | 'left' | 'right' | 'down';

export type EnemyType = {
  id: number;
  coordinate: [number, number];
  currentDirection: number;
  directionValue: DirectionType[];
};

export type StageType = {
  id: string;
  stage: number[][];
  enemy: EnemyType[];
};
