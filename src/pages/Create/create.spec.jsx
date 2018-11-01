import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import Create from './index';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('Create page', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Create page', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
