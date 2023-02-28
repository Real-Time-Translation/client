import React, { FC } from 'react';
import { useStyles } from './index.styles';
import { Typography } from '@mui/material';

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="body1">
        WebRTC language translator
      </Typography>
    </div>
  );
};
