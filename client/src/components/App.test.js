import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Initial test setup', () => {
  it('prints "Hello, World"', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();

    expect(text).toEqual('Hello, World!');
  })
})
