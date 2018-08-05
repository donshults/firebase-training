import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr } from '../../Shared/testUtils';

import Tweeter from './Tweeter';

var configSettings = {
    apiKey: "AIzaSyCREO9bqil6nSQGls55bF7QHU6l4VDXMDo",
    authDomain: "itektweeter.firebaseapp.com",
    databaseURL: "https://itektweeter.firebaseio.com",
    projectId: "itektweeter",
    storageBucket: "itektweeter.appspot.com",
    messagingSenderId: "27676965902"
};

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
    return shallow(<Tweeter {...props} />);
}

it('renders without crashing', () => {
    const wrapper = setup({tweets: [{id:0,tweet:"tweet1"},{id:1,tweet:"tweet2"}]});
    const component = findByTestAttr(wrapper, 'component-tweeter');
    expect (component.length).toBe(1);
});

it('does not throw warning with expected props', () =>{
     const myconfig = setup({config:{configSettings}});
    const expectedProps = myconfig;
    const propError = checkPropTypes(Tweeter.propTypes, expectedProps, 'prop', Tweeter.name);
    expect(propError).toBeUndefined();
   
} ); 
  
  