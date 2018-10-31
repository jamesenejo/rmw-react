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
const Profile = asyncLoader(() => import(/* webpackChunkName: "profile" */'Pages/Profile'));
const EditProfile = asyncLoader(() => import(/* webpackChunkName: "editprofile" */'Pages/EditProfile'));
const Upload = asyncLoader(() => import(/* webpackChunkName: "upload" */'Pages/Upload'));
const AllRides = asyncLoader(() => import(/* webpackChunkName: "allrides" */'Pages/AllRides'));
const Ride = asyncLoader(() => import(/* webpackChunkName: "create" */'Pages/Ride'));
const Create = asyncLoader(() => import(/* webpackChunkName: "create" */'Pages/Create'));

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile/edit" component={EditProfile} />
      <Route path="/profile/upload" component={Upload} />
      <Route path="/profile" component={Profile} />
      <Route path="/create" component={Create} />
      <Route path="/rides/:rideId" component={Ride} />
      <Route path="/rides" component={AllRides} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
