import React, { FC } from 'react';
import { Container } from '@mui/material';
import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';
import { useStyles } from './index.styles';
export const MainLayout: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};
