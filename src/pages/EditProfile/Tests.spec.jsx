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
const incompleteUserProfile = {};

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
  it('should dispatch actions and update profile', () => {
    const saveButton = wrapper.find('#submit').at(1);
    saveButton.simulate('click');
    expect(wrapper.find('#message').exists()).toBe(true);
  });
});

describe('Simulate message page', () => {
  const newStore = { ...mockReduxState }
  newStore.user = incompleteUserProfile;
  const reduxStore = mockStore(newStore);
  const wrapper = mount(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <EditProfile />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the EditProfile page', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should dispatch actions and update profile', () => {
    const saveButton = wrapper.find('#submit').at(1);
    saveButton.simulate('click');
    jest.runAllTimers();
    expect(wrapper.find('#message').exists()).toBe(true);
  });
});
