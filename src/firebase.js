import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCREO9bqil6nSQGls55bF7QHU6l4VDXMDo",
    authDomain: "itektweeter.firebaseapp.com",
    databaseURL: "https://itektweeter.firebaseio.com",
    projectId: "itektweeter",
    storageBucket: "itektweeter.appspot.com",
    messagingSenderId: "27676965902"
};
firebase.initializeApp(config);


export default firebase;