import React, { FC } from 'react';
import { Box, Button } from '@mui/material';

export const NavMenu: FC = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {['Create room', 'Test connection'].map((item: string) => (
        <Button key={item} sx={{ color: '#fff', textTransform: 'none' }} color="inherit">
          {item}
        </Button>
      ))}
    </Box>
  );
};
