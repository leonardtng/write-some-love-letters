import React, { useContext } from 'react';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline, Theme, ThemeOptions } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';

const AppTheme: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const common: ThemeOptions = {
    typography: {
      fontFamily: "'Avenir', sans-serif !important",
    }
  };

  const light: Theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#CC6598',
      },
      secondary: {
        main: '#E2B3D7',
      },
      background: {
        default: '#fafafa',
        paper: '#f2f2f2',
      },
    },
    ...common
  });

  const dark: Theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#D587B7',
      },
      secondary: {
        main: '#D79ECC',
      },
      background: {
        default: '#0B0C10',
        paper: '#1F2833',
      },
    },
    ...common
  });

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default AppTheme;