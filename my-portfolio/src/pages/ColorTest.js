import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export default function ColorTest() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FEE523',
      },
      secondary: {
        main: '#04023b',
      },
    },
  });
  return (
    <ThemeProvider theme={ theme } />
  );
}
