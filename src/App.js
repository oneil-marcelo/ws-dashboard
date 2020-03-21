import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
