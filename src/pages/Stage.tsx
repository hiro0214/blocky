import { useParams } from 'react-router-dom';

export const Stage = () => {
  const params = useParams<{ id: string }>();

  return <h1>{params.id} Stage Page</h1>;
};
