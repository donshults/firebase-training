import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr } from '../../../Shared/testUtils';

import TweetViewWindow from './TweetViewWindow';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<TweetViewWindow tweets={ [{id:0,tweet:"tweet1"},{id:1,tweet:"tweet2"}]} />);
    const component = findByTestAttr(wrapper, 'component-tweet-window');
    expect (component.length).toBe(1);
  });

 it('does not throw warning with expected props', () =>{
   const expectedProps = {tweets: [{id:0,tweet:"tweet1"},{id:1,tweet:"tweet2"}] };
   const propError = checkPropTypes(TweetViewWindow.propTypes, expectedProps, 'prop', TweetViewWindow.name);
   expect(propError).toBeUndefined();
  
} ); 
