import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { findByTestAttr } from '../../Shared/testUtils';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const component = findByTestAttr(wrapper, 'component-app');
  expect (component.length).toBe(1);
});
