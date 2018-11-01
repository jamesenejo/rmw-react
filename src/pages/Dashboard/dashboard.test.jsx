import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../mockReduxState';
import Dashboard from './index';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockReduxState);

describe('Home Tests', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );
  it('Mount the Dashboard', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Displays Ride summary div', () => {
    expect(wrapper.find('#rideSummary').exists()).toBe(true);
  });
  it('Displays Ride bookings div', () => {
    expect(wrapper.find('#rideBooking').exists()).toBe(true);
  });
  it('Displays Ride statistics div', () => {
    expect(wrapper.find('.history').exists()).toBe(true);
  });
});
