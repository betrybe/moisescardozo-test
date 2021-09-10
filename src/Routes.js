import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Teste from './pages/Teste';
import Wallet from './pages/Wallet';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={ Teste } /> */}
      <Route path="/" exact component={ Login } />
      <Route path="/wallet" component={ Wallet } />
    </Switch>
  );
}
