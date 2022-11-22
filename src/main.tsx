import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from '@/pages';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <CssBaseline />
    <AppRouter />
  </>,
);
