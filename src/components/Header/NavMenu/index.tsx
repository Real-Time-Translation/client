import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { useStyles } from './index.styles';
export const NavMenu: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {['Create room', 'Test connection'].map((item: string) => (
        <Button key={item} color="inherit" className={classes.navItem}>
          {item}
        </Button>
      ))}
    </Box>
  );
};
