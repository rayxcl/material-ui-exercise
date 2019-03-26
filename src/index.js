import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, amber } from '@material-ui/core/colors';

// import App from './components/App';
// import './styles.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
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


// console.log(theme);
// console.log(red);

import(/* webpackChunkName: 'app' */ './components/App')
  .then(({ default: App }) => ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  ));
