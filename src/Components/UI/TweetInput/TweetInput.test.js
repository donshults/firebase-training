import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr } from '../../../Shared/testUtils';

import TweetInput from './TweetInput';

Enzyme.configure({ adapter: new Adapter() });

var testFunction = () => {
  console.log('Hello');
};

/*testFunction();
*/
it('renders without crashing', () => {
    const wrapper = shallow(<TweetInput />)
    const component = findByTestAttr(wrapper, 'component-tweet-input');
    expect (component.length).toBe(1);
  });


 it('does not throw warning with expected props', () =>{
    const expectedProps = {tweetInputChanged: testFunction, tweetSubmited: testFunction} ;
    console.log(expectedProps);
    const propError = checkPropTypes(TweetInput.propTypes, expectedProps, 'prop', TweetInput.name);
    expect(propError).toBeUndefined();
   
 } ); 

