import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/register" component={ Register } />
      <Route path="/details" component={ Details } />
    </Switch>
  );
}

export default App;
