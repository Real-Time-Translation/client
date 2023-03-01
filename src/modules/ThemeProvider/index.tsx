import React, { FC } from 'react';

import {
  ThemeProvider as MUIThemeProvider,
  createTheme as createMUITheme,
} from '@mui/material/styles';
import { ThemeProviderProps } from './interfaces';
import { useStyles as useGlobalStyles } from '@/global.styles';

const darkTheme = createMUITheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  useGlobalStyles();
  return <MUIThemeProvider theme={darkTheme}>{children}</MUIThemeProvider>;
};
