import React from 'react';
import Router from './Router/Router'
/* import Header from './Components/Header/Header' */
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Contants/theme'
import Card from './Components/CardComment'
import GlobalState from './Global/GlobalState'

const App = () => {
  return (
      <GlobalState>
    <ThemeProvider theme={theme}>
      <Router />
   {/*  <Card/> */}
    </ThemeProvider>
      </GlobalState>
  );
}

export default App;
