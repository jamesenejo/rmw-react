import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import HomeNav from './HomeNav';

describe('Home Tests', () => {
  it('prints "This is the home page."', () => {
    const wrapper = shallow(<Home />);
    const text = wrapper.find('h1').html();
    expect(text).toEqual('<h1>Travel more<span>,</span>spend less</h1>');
  });
  it('prints "This is the home page."', () => {
    const wrapper = shallow(<HomeNav />);
    expect(wrapper.find('p').text()).toEqual('Working...');
  });
});
