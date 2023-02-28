import React, { FC } from 'react';
import { useStyles } from './index.styles';
import { Typography } from '@mui/material';

/** Footer */
export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} fontSize={12}>
        @2023 Evgeny Afanasyev. Thesis project for Innopolis University
      </Typography>
    </div>
  );
};
