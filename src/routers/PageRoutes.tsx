import { Result } from '../pages/Result';
import { Select } from '../pages/Select';
import { Stage } from '../pages/Stage';
import { Top } from '../pages/Top';

export const pageRoutes = [
  {
    path: '/',
    element: <Top />,
  },
  {
    path: '/select',
    element: <Select />,
  },
  {
    path: '/stage/:id',
    element: <Stage />,
  },
  {
    path: '/result',
    element: <Result />,
  },
];
