import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { P2P } from './P2P';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/p2p',
    element: <P2P />,
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
