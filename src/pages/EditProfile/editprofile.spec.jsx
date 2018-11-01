import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import EditProfile from './index';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('EditProfile page', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <EditProfile />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the EditProfile page', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
