import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { MeetingP2P } from './MeetingP2P';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/p2p/:meetingId',
    element: <MeetingP2P />,
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
