import { FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  color: string;
  onclick: () => void;
};

export const Button: FC<Props> = memo((props) => {
  const { label, color, onclick } = props;

  return (
    <_Button className={color} onClick={onclick}>
      {label}
    </_Button>
  );
});

const _Button = styled.button`
  width: 200px;
  padding: 12px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;

  &.green {
    color: #fff;
    background: #22c55e;
    border-color: #15803d;
  }
`;
