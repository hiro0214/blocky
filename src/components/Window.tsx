import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export const Window: FC<Props> = (Props) => {
  const { children } = Props;

  return <_Container>{children}</_Container>;
};

const _Container = styled.div`
  width: 800px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  background: #fff;
  border: 4px solid #a0aec0;
  border-radius: 6px;
`;
