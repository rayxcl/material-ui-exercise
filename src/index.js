import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, deepOrange, amber } from '@material-ui/core/colors';

import App from './components/App';
import './styles.css';

// const theme = createMuiTheme();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    // primary: red,
    primary: deepOrange,
    secondary: {
      // main: '#FFC107'
      // main: amber.A400,
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
});

const rootElement = document.getElementById('root');

// console.log(theme);
// console.log(red);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
