import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Provider from './context/Provider';
import Routes from './routes/Routes';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '\'Sinkin\', \'sans-serif\'',
    },
    palette: {
      primary: {
        main: '#d14e4e',
      },
      secondary: {
        main: '#3d315b',
      },
      background: {
        default: '#f0f3f5',
      },
    },
  });

  // fontFamily: '\'Poppins\', \'sans-serif\'',

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
