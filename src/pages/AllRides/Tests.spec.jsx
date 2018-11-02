import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import AllRides from './index';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('All rides pages', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <AllRides />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Get all rides page', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
