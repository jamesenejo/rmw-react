import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../../mockReduxState';
import ProfileCompletenessIndicator from '../ProfileCompletenessIndicator';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);


describe('mount render common components', () => {
  describe('Render ProfileCompletenessIndicator', () => {
    const { completeness } = mockReduxState.user;
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileCompletenessIndicator completeness={completeness} />
        </BrowserRouter>
      </Provider>
    );
    it('should mount ProfileCompletenessIndicator', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('Simulate profileCompletenessIndicator click', () => {
      const saveButton = wrapper.find('.profile-completeness').at(0);
      saveButton.simulate('click');
      jest.runAllTimers();
      saveButton.simulate('click');
      expect(wrapper.find('#message').exists()).toBe(false);
    });
    it('Simulate profileCompletenessIndicator click again', () => {
      const saveButton = wrapper.find('.profile-completeness').at(0);
      saveButton.simulate('click');
      jest.runAllTimers();
      saveButton.simulate('click');
      expect(wrapper.find('#message').exists()).toBe(false);
    });
  });

  describe('Render ProfileCompletenessIndicator change backgroundColor', () => {
    const newCompleteness = '33%';
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileCompletenessIndicator completeness={newCompleteness} />
        </BrowserRouter>
      </Provider>
    );
    it('should mount ProfileCompletenessIndicator', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Render ProfileCompletenessIndicator change backgroundColor again', () => {
    const newCompleteness = '88%';
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileCompletenessIndicator completeness={newCompleteness} />
        </BrowserRouter>
      </Provider>
    );
    it('should mount ProfileCompletenessIndicator', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
