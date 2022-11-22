import React, { FC } from 'react';
import { Backdrop, Box, Typography } from '@mui/material';

export const DashboardContainer: FC = () => {
  const rooms = [
    {
      id: 0,
      name: 'Room 1',
      isAvailable: true,
    },
    {
      id: 1,
      name: 'Room 2',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Room 3',
      isAvailable: true,
    },
  ];
  return (
    <Box sx={{ pt: 4 }}>
      <Box sx={{ backgroundColor: '#323940' }} borderRadius={3} boxShadow={4} padding={2}>
        <Typography variant="h5" color={'white'}>
          Rooms
        </Typography>
        <Box color={'white'} sx={{ display: 'flex', flexWrap: 'wrap', rowGap: 4, columnGap: 3 }} pt={2}>
          <RoomCard />
          <RoomCard />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#323940' }} borderRadius={3} boxShadow={4} padding={2} marginTop={2}>
        <Typography variant="h5" color={'white'}>
          Peers online
        </Typography>
        <Box color={'white'} sx={{ display: 'flex', flexWrap: 'wrap', rowGap: 4, columnGap: 3 }} pt={2}>
          <RoomCard />
          <RoomCard />
        </Box>
      </Box>
    </Box>
  );
};

export const RoomCard: FC = () => {
  return (
    <Box
      width={400}
      p={3}
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
      }}
      flexBasis={'auto'}
      flexGrow={1}
      borderRadius={2}
    >
      <Box>
        <Typography variant="subtitle1">Room name</Typography>
        <Typography variant="subtitle2">Room name</Typography>
      </Box>
      <Box border={1} borderRadius={1} px={'4px'}>
        <Typography variant="body2">Join room</Typography>
      </Box>
    </Box>
  );
};
