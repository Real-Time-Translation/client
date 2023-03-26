import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from '@/pages';
import { CssBaseline } from '@mui/material';
import { LanguageProvider } from '@modules/LanguageProvider';
import { ThemeProvider } from '@modules/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ThemeProvider>
      <CssBaseline />
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </ThemeProvider>
  </>,
);
