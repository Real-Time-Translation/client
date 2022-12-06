import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './index.styles';
import { RoomCardProps } from './interfaces';
import classNames from 'classnames';

export const RoomCard: FC<RoomCardProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={classNames(classes.root, className)}>
      <Box>
        <Typography variant="subtitle1">Room name</Typography>
        <Typography variant="subtitle2">Room name</Typography>
      </Box>
      <Box className={classes.joinButton}>
        <Typography variant="body2">Join room</Typography>
      </Box>
    </Box>
  );
};
