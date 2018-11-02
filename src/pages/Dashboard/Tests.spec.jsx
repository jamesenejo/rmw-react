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
import RideBooking from './RideBooking';
import RideOffer from './RideOffer';
import RideHistoryStat from './RideHistoryStat';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockReduxState);
describe('Dashboard Tests', () => {
  describe('Mount Dashboard', () => {
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
  });

  describe('FontLoading Test on Dashboard (runningOffer)', () => {
    const newStore = Object.assign({}, mockReduxState);
    newStore.userDash.runningOffer = undefined;
    const reduxStore = mockStore(newStore);
    const wrapper = mount(
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    it('Test that spinner appears when userDash details is undefined', () => {
      expect(wrapper.find('.fa-spinner').exists()).toBe(true);
    });
  });

  describe('FontLoading Test on Dashboard (runningJoinRequest)', () => {
    const newStore = { ...mockReduxState }
    newStore.userDash.runningJoinRequest = undefined;
    const reduxStore = mockStore(newStore);
    const wrapper = mount(
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
    it('Test that spinner appears when userDash details is undefined', () => {
      expect(wrapper.find('.fa-spinner').exists()).toBe(true);
    });
  });

  describe('Mount RideBooking', () => {
    const { runningOffer } = mockReduxState.userDash;
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <RideHistoryStat runningJoinRequest={runningOffer} />
        </BrowserRouter>
      </Provider>
    );
    it('Mount the Dashboard', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('RideHistoryStat', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RideHistoryStat />
      </BrowserRouter>
    );
    it('Mount the RideHistoryStat', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
