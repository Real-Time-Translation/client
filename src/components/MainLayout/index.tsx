import React, { FC } from 'react';
import { Container } from '@mui/material';
import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  const rootStyles = { minHeight: '100vh', backgroundColor: '#1f2429' };
  return (
    <div style={rootStyles}>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};
