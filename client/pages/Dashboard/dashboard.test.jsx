import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Dashboard from './index';
import storage from '../../store';

const { store } = storage();


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
