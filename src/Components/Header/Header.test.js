import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../Shared/testUtils';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<Header />)
    const component = findByTestAttr(wrapper, 'component-header');
    expect (component.length).toBe(1);
  });
  