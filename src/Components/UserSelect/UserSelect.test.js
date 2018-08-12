import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr } from '../../Shared/testUtils';

import UserSelect from './UserSelect'

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
    return shallow(<UserSelect {...props} />);
}

let users = [
    { id: 1, name: "Don Shults", email: "don@tektanium.com" },
    { id: 2, name: "Ted Shults", email: "ted@tektanium.com" }
];

describe('User Selector', () => {
    const wrapper = setup(users = { users });
    it('renders without crashing', () => {
        const component = findByTestAttr(wrapper, 'component-user-select');
        expect(component.length).toBe(1);
    });

    it('Select has more than 0 options', () => {
        

    });
})
