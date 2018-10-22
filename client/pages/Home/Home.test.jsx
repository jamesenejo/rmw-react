import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Home from './index';
import HomeNav from './HomeNav';

// mock store
const store = {
  isLoggedIn: false
};

describe('Home Tests', () => {
  it('prints "This is the home page."', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
