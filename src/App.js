import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </div>
  );
}

export default App;
