import React, { FC } from 'react';
import { Box } from '@mui/material';
import { GroupRooms } from './GroupRooms';
import { P2PRooms } from './P2PRooms';
import { useStyles } from './index.styles';
import { OnlineUsers } from '@containers/DashboardContainer/OnlineUsers';

export const DashboardContainer: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.leftPart}>
        <Box className={classes.roomsWrapper}>
          <GroupRooms />
        </Box>
        <Box className={classes.roomsWrapper}>
          <P2PRooms />
        </Box>
      </Box>
      <Box className={classes.usersWrapper}>
        <OnlineUsers />
      </Box>
    </Box>
  );
};
