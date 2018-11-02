import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../../mockReduxState';
import CommonUserNav from '../CommonUserNav';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);


describe('mount render common components', () => {
  describe('Render CommonUserNav', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CommonUserNav imgUrl={mockReduxState.user.imgUrl} />
        </BrowserRouter>
      </Provider>
    );
    it('should mount render CommonUserNav', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should toggle user navigation bar', () => {
      wrapper.find('#userNavToggler').simulate('click');
      expect(wrapper.find('#userNav').exists()).toBe(true);
    });
    it('should toggle user navigation bar again', () => {
      wrapper.find('#userNavToggler').simulate('click');
      expect(wrapper.find('#userNav').exists()).toBe(true);
    });
  });
});
