import React, { FC } from 'react';
import { AppBar, Typography, Button, Toolbar, Container } from '@mui/material';
import { NavMenu } from '@components/Header/NavMenu';

export const Header: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#23282e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Real Time Translation
          </Typography>
          <NavMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
