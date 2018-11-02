import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import Signup from './index';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('Signup page', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Signup page', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should dispatch message actions display errors', () => {
    const saveButton = wrapper.find('#submit');
    saveButton.simulate('click');
    expect(wrapper.find('#message').exists()).toBe(true);
  });
  it('should dispatch message actions display errors', () => {
    wrapper.find('#firstname').simulate('change', { target: { value: 'King' } });
    wrapper.find('#email').simulate('change', { target: { value: 'email@email.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'pass' } });
    wrapper.find('#confirmPassword').simulate('change', { target: { value: 'pass' } });
    const saveButton = wrapper.find('#submit');
    saveButton.simulate('click');
    expect(wrapper.find('#message').exists()).toBe(true);
  });
});
