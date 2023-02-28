import React, { FC } from 'react';
import { Box } from '@mui/material';
import { GroupRooms } from './GroupRooms';
import { P2PRooms } from './P2PRooms';
import { useStyles } from './index.styles';
import { OnlineUsers } from './OnlineUsers';
import { useGetPeers } from './hooks/useGetPeers';

export const DashboardContainerV1: FC = () => {
  useGetPeers();
  /**
   * FLOW для дашборда
   * 1. Когда пользователь заходит на дашборд - на бек отправляем onConnect
   * и возвращаем id сокета - это будет айди комнаты для пользователя
   * 2. Также из бекенда возвращаем список всех id сокетов, которые сейчас онлайн
   * 3. onLeave отправляем сокету разъединение и уведомляем остальных пользователей
   * */

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
