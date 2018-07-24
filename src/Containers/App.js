import React, { Component } from 'react';
import './App.css';
import PersonInput from '../Components/personInput';
import PersonList from '../Components/personList';
import Tweeter from './Tweeter';

class App extends Component {
  render() {
    console.log(this.props.config);
    return (
      <div className="App">
        <h1>Starting Now</h1>
        <Tweeter config={this.props.config} />
      </div>
    );
  }
}

export default App;
