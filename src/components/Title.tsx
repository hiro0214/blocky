import { FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export const Title: FC<Props> = memo((props) => {
  const { text } = props;

  return <_Text>{text}</_Text>;
});

const _Text = styled.p`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
`;
