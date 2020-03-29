import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './components/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
