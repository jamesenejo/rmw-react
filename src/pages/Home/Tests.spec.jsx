import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import Home from './index';
import HomeNav from './HomeNav';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('Home pages', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Get all rides page', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Home pages', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <HomeNav isLoggedIn />
      </BrowserRouter>
    </Provider>
  );
  it('should display dashboard and logout buttons when user is logged in', () => {
    expect(wrapper.find('#logout').exists()).toEqual(true);
  });
});
