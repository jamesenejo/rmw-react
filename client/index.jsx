import '@babel/polyfill';
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
// import "./styles/css/all-offers.scss";
// import "./styles/css/create.scss";
// import "./styles/css/dashboard.scss";
// import "./styles/css/general.scss";
// import "./styles/css/index.scss";
// import "./styles/css/login.scss";
// import "./styles/css/master.scss";
// import "./styles/css/profile.scss";
// import "./styles/css/responses.scss";
// import "./styles/css/ride-offer-general.scss";
// import "./styles/css/ride-offer.scss";
// import "./styles/css/sign-up.scss";
// import "./styles/css/upload.scss";


const store = configureStore({ isLoggedIn: false });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
