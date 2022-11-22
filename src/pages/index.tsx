import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { P2P } from './P2P';
import { MainLayout } from '@components/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/p2p',
        element: <P2P />,
      },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
