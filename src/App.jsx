import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Component imports
import Home from 'Pages/Home';
import Dashboard from 'Pages/Dashboard';
import Login from 'Pages/Login';
import Signup from 'Pages/Signup';

// styles imports
import 'Styles/master';
import 'Styles/general';

// Helpers
import listenForClickEvents from 'Helpers/listenForClickEvents';

// Attach click event listener for toggling navbar
listenForClickEvents();

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
