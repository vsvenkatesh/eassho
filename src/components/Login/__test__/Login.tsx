import * as React from 'react';
import { mount } from 'enzyme';
import Login from '../component';

test('The main Class exists', () => {
  const wrapper = mount(<Login />);
  const rootClass = wrapper.find('.root-class');
  expect(rootClass.length).toBe(1);
});