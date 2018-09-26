import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Tests', () => {
  it('prints "This is the home page."', () => {
    const wrapper = shallow(<Home />);
    const text = wrapper.find('div').text();

    expect(text).toEqual('This is the home page.');
  });
});
