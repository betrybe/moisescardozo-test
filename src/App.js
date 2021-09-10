import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Teste from './pages/Teste';

import store from './store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
