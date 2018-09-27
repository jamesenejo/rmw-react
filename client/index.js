import '@babel/polyfill';
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import "./styles/index.scss";

const store = store()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
