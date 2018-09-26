import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Home Tests', () => {
  it('prints "This is the dashboard."', () => {
    const wrapper = shallow(<Dashboard />);
    const text = wrapper.find('div').text();

    expect(text).toEqual('This is the dashboard.');
  });
});
