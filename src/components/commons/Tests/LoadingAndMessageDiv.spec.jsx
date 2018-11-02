import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import "isomorphic-fetch";
import "es6-promise";

import mockReduxState from '../../../../mockReduxState';
import FontLoading from '../FontLoading';
import MessageDiv from '../MessageDiv';

const mockStore = configureMockStore([thunk]);

let store = mockStore(mockReduxState);


describe('mount render common components', () => {
  describe('Render MessageDiv', () => {
    mockReduxState.message.messages = ['Some message'];
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <MessageDiv message={mockReduxState.message} />
        </BrowserRouter>
      </Provider>
    );
    it('should mount MessageDiv', () => {
      expect(wrapper.find('.error-message').exists()).toBe(true);
    });
  });
});
