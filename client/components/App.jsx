import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Component imports
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Signup from './signup/Signup';

// styles imports
import '../styles/css/master.scss';
import '../styles/css/general.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
