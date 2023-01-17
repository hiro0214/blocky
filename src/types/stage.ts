export type EnemyType = {
  id: number;
  coordinate: [number, number];
  direction: 'up' | 'left' | 'right' | 'down';
};

export type StageType = {
  id: string;
  stage: number[][];
  enemy: EnemyType[];
};
