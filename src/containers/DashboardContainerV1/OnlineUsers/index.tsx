import React, { FC } from 'react';
import { useStyles } from './index.styles';
import { Box, Typography } from '@mui/material';
export const OnlineUsers: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.paperTitle}>
        Users
      </Typography>
      <Box className={classes.paperUsersList}>
        <div className={classes.userTitle}>User</div>
        <div className={classes.userTitle}>User</div>
        <div className={classes.userTitle}>User</div>
        <div className={classes.userTitle}>User</div>
      </Box>
    </>
  );
};
