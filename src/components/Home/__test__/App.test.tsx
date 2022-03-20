import * as React from 'react';
import { mount } from 'enzyme';
import App from '../component';

test('The main Class exists', () => {
  const wrapper = mount(<App />);
  const rootClass = wrapper.find('.root-class');
  expect(rootClass.length).toBe(1);
});