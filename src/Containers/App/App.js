import React, { Component } from 'react';
import './App.css';

import Tweeter from '../Tweeter/Tweeter';

class App extends Component {
  render() {
    return (
      <div className="App" data-test='component-app' >
        <Tweeter config={this.props.config} />
      </div>
    );
  }
}

export default App;
