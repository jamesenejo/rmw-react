import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
