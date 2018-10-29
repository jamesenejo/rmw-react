import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Dashboard from './index';
import store from '../../store';


describe('Home Tests', () => {
  it('prints "This is the dashboard."', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
