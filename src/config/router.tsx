import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'src/pages/HomePage.tsx';
import GamePage from 'src/pages/GamePage.tsx';
import StatsPage from 'src/pages/StatsPage.tsx';
import Layout from 'src/components/Layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'game',
        element: <GamePage />,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
    ],
  },
]);

export default router;
