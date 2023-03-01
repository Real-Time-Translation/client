import React, { FC } from 'react';

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProviderProps } from './interfaces';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <MUIThemeProvider theme={darkTheme}>{children}</MUIThemeProvider>;
};
