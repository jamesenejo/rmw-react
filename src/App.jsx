import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import listenForClickEvents from 'Helpers/listenForClickEvents';
import asyncLoader from './components/asyncLoader';

// styles imports
import 'Styles/master';
import 'Styles/general';

// Attach click event listener for toggling navbar
listenForClickEvents();

const Home = asyncLoader(() => import(/* webpackChunkName: "home" */'Pages/Home'));
const Dashboard = asyncLoader(() => import(/* webpackChunkName: "dashboard" */'Pages/Dashboard'));
const Login = asyncLoader(() => import(/* webpackChunkName: "login" */'Pages/Login'));
const Signup = asyncLoader(() => import(/* webpackChunkName: "signup" */'Pages/Signup'));

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
