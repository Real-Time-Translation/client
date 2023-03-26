import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { MeetingP2P } from './MeetingP2P';
import { RootPaths } from './constants';

const router = createBrowserRouter(
  [
    {
      path: RootPaths.Dashboard,
      element: <Dashboard />,
    },
    {
      path: RootPaths.P2PMeeting,
      element: <MeetingP2P />,
    },
  ],
  { basename: '/client' },
);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
