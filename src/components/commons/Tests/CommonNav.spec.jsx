import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../../mockReduxState';
import CommonNav from '../CommonNav';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);


describe('mount render common components', () => {
  describe('Render CommonNav', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CommonNav
            user={mockReduxState.user}
            isLoggedIn
          />
        </BrowserRouter>
      </Provider>
    );
    it('should mount render CommonNav', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should log user out', () => {
      const logout = wrapper.find('#logout');
      logout.simulate('click');
      expect(wrapper.find('#message').exists()).toBe(false);
    });
  });
  describe('Render mobile screen CommonNav', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CommonNav
            user={mockReduxState.user}
            isLoggedIn={mockReduxState.isLoggedIn}
          />
        </BrowserRouter>
      </Provider>
    );

    global.innerWidth = 500;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));

    const navButton = wrapper.find('#navigationToggler');

    it('should toggle nav on click', () => {
      navButton.simulate('click');

      expect(wrapper.find('#message').exists()).toBe(false);
    });
    it('should toggle nav on click again', () => {
      navButton.simulate('click');

      expect(wrapper.find('#message').exists()).toBe(false);
    });
  });
});
