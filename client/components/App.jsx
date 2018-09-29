import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Signup from './signup/Signup';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default App;
