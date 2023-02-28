import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { RoomCard } from '@components/RoomCard';
import { useStyles } from './index.styles';

export const P2PRooms: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.paperTitle}>
        P2P rooms
      </Typography>
      <Box className={classes.paperCardList}>
        <RoomCard className={classes.roomCard} />
        <RoomCard className={classes.roomCard} />
        <RoomCard className={classes.roomCard} />
      </Box>
    </>
  );
};
