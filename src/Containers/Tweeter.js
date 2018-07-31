import React from 'react';
import Header from '../Components/Header/Header';
import TweetViewWindow from '../Components/UI/TweetViewWindow/TweetViewWindow';
import TweetInput from '../Components/UI/TweetInput/TweetInput';
import axios from 'axios';

import classes from '../Containers/Tweeter.css'

class Tweeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetInput:  ""
        }
    };

 
    tweetInputChanged = event => {
        this.setState({ name: event.target.value });
    };
    
    tweetSubmited = event => {
        event.preventDefault();

        const tweetInput = {
            name: this.state.name
        }
        const tweet = {
            tweetInput: this.state.tweetInput
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { tweetInput })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        let firebaseRoot = this.props.config.databaseURL;
        console.log(classes);
        return (
            <div className={classes.Tweeter}>
                <Header />
                <TweetViewWindow />
                <TweetInput tweetInputChanged={this.tweetInputChanged} tweetSubmited={this.tweetSubmited} />
            </div>
        );
    }
}

export default Tweeter;