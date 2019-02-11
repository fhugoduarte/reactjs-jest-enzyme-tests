import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

it('renders without props', () => {
  const component = shallow(<App />);

  expect(component).toMatchSnapshot();
});

it('update state value', () => {
  const component = mount(<App />);
  expect(component.state('count')).toEqual(0);
  component.setState({ count: 10 });
  expect(component.state('count')).toEqual(10);
});

it('verify change text', () => {
  const component = mount(<App />);
  expect(component.text()).toContain('0 clicks');
  component.find('button#increment').simulate('click');
  expect(component.text()).toContain('1 clicks');
  component.find('button#decrement').simulate('click');
  expect(component.text()).toContain('0 clicks');
});

it('verify state like a text count', () => {
  const component = mount(<App/>);
  let state = component.state('count');
  expect(component.text()).toContain(state);
  component.find('button#increment').simulate('click');
  state = component.state('count');
  expect(component.text()).toContain(state);
  component.find('button#decrement').simulate('click');
  component.find('button#decrement').simulate('click');
  component.find('button#decrement').simulate('click');
  expect(component.text()).toContain(state - 3);
})

it('click to increment button', () => {
  const component = mount(<App />);
  expect(component.find('.clicks-0').length).toEqual(1);
  component.find('button#increment').simulate('click');
  expect(component.find('.clicks-0').length).toEqual(0);
  expect(component.find('.clicks-1').length).toEqual(1);
  component.find('button#increment').simulate('click');
  expect(component.find('.clicks-2').length).toEqual(1);
});

it('click to decrement button', () => {
  const component = mount(<App />);
  expect(component.find('.clicks-0').length).toEqual(1);
  component.find('button#decrement').simulate('click');
  expect(component.find('.clicks-0').length).toEqual(0);
  expect(component.find('.clicks--1').length).toEqual(1);
  component.find('button#decrement').simulate('click');
  expect(component.find('.clicks--2').length).toEqual(1);
});