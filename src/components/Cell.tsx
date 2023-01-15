import { FC, memo } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  value: number;
};

export const Cell: FC<Props> = memo((Props) => {
  const { value } = Props;

  let cell;

  if (value === 0) {
    cell = <_Cell_0 />;
  } else if (value === 1) {
    cell = <_Cell_1 />;
  } else if (value === 2) {
    cell = <_Cell_2 />;
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
`;

const _CollapseCell = css`
  position: absolute;
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
  padding: 3px;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
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
