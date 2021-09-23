import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}
