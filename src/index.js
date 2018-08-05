import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App/App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyCREO9bqil6nSQGls55bF7QHU6l4VDXMDo",
    authDomain: "itektweeter.firebaseapp.com",
    databaseURL: "https://itektweeter.firebaseio.com",
    projectId: "itektweeter",
    storageBucket: "itektweeter.appspot.com",
    messagingSenderId: "27676965902"
};
firebase.initializeApp(config);

ReactDOM.render(<App config={config}/>, document.getElementById('root'));
registerServiceWorker();
