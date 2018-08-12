import React, { Component } from 'react';
import './App.css';
import UserForm from '../User/User';
import Tweeter from '../Tweeter/Tweeter';
import firebase from 'firebase';

class App extends Component {
    constructor(props){
      super(props);

    };

  render() {
    var newValue = "test";
    return (
      <div className="App" data-test='component-app' >
        {/*console.log(newValue) */}
        <Tweeter />
        {/* <UserForm /> */}
      </div>
    );
  }
}

export default App;
