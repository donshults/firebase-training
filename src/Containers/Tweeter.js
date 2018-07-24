import React from 'react';
import classes from '../Containers/Tweeter.css'

class Tweeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        let firebaseRoot = this.props.config.databaseURL;
        console.log(classes);
        return (
            <div className={classes.Tweeter}>
                <h1>{firebaseRoot}</h1>
            </div>
        );
    }
}

export default Tweeter;