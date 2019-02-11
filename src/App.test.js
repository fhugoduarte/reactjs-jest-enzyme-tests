import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

it('renders without props', () => {
  const component = shallow(<App />);

  expect(component).toMatchSnapshot();
});

it('render Code Tag', () => {
  const component = mount(<App />);
  const code = <code>src/App.js</code>;
  expect(component.contains(code)).toEqual(false);
});

it('click to increment button', () => {
  const component = mount(<App />);
  expect(component.find('.clicks-0').length).toEqual(1);
  component.find('button').simulate('click');
  expect(component.find('.clicks-0').length).toEqual(0);
  expect(component.find('.clicks-1').length).toEqual(1);
  component.find('button').simulate('click');
  expect(component.find('.clicks-2').length).toEqual(1);
});