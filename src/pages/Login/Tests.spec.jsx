import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import Login from './index';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('Login page', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Login page', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should dispatch message actions display errors', () => {
    wrapper.find('#email').simulate('change', { target: { value: 'email@email.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'pass' } });

    wrapper.update()

    const saveButton = wrapper.find('#submit');
    saveButton.simulate('click');
    expect(wrapper.find('#message').exists()).toBe(true);
  });
});
