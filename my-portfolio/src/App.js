import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Provider from './context/Provider';
import Routes from './routes/Routes';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['\'Bellaboo\', \'sans-serif\'',
        '\'Sinkin\', \'sans-serif\'',
        '\'notime\', \'sans-serif\'',
        'JustSimple',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#fffd82',
      },
      secondary: {
        main: '#3d315b',
      },
      background: {
        default: '#070707',
      },
    },
  });

  return (
    <Provider>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
