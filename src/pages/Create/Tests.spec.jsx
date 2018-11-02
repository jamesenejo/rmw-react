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
import CannotCreate from './CannotCreate';
import CreateForm from './CreateForm';

const rideFormDetails = {
  fromState: "Lagos",
  fromCity: "Frankini",
  toState: "Lagosa",
  toCity: "Haniki",
  price: "4500",
  seats: 5,
  departureDate: "2018-11-04",
  departureTime: "16:44:00",
  pickupLocation: "Seme"
};

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);

describe('Create ride page', () => {
  describe('Mount Create ride page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Create />
        </BrowserRouter>
      </Provider>
    );
    it('Mount the create ride page', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('Mount the create ride page', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should dispatch message actions display errors', () => {
      const saveButton = wrapper.find('#submit').at(1);
      saveButton.simulate('click');
      expect(wrapper.find('#message').exists()).toBe(true);
    });
    it('should submit create ride form successfully', () => {
      wrapper.find('#fromState').simulate('change', { target: { value: 'Lagos' } });
      wrapper.find('#fromCity').simulate('change', { target: { value: 'Mafouku' } });
      wrapper.find('#toState').simulate('change', { target: { value: 'Lagos' } });
      wrapper.find('#toCity').simulate('change', { target: { value: 'Ipaja' } });
      wrapper.find('#price').simulate('change', { target: { value: '500' } });
      wrapper.find('#seats').simulate('change', { target: { value: '4' } });
      wrapper.find('#departureDate').simulate('change', { target: { value: "2018-11-04" } });
      wrapper.find('#departureTime').simulate('change', { target: { value: '16:44:00' } });
      wrapper.find('#pickupLocation').simulate('change', { target: { value: '`mobile`' } });

      const saveButton = wrapper.find('#submit').at(0);
      saveButton.simulate('click');
      expect(wrapper.find('#message').exists()).toBe(true);
    });
  });
  describe('It should display CannotCreate when profile is less than 100%', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CannotCreate user={mockReduxState.user} />
        </BrowserRouter>
      </Provider>
    );
    it('Mount the CannotCreate ride page', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
