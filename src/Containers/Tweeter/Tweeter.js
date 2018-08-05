import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/Header';
import TweetViewWindow from '../../Components/UI/TweetViewWindow/TweetViewWindow';
import TweetInput from '../../Components/UI/TweetInput/TweetInput';
import axios from 'axios';

import classes from '../Tweeter/Tweeter.css'

class Tweeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTweets: [],
            tweetInput: ""
        }
    };


    tweetInputChanged = event => {
        console.log(event.target.value);
        this.setState({ tweetInput: event.target.value });
    };

    tweetSubmited = event => {
        event.preventDefault();
        let current = this.state.currentTweets;
        let newTweet = { id:current.length, tweet: this.state.tweetInput }
        current.push(newTweet);
        this.setState( {currentTweets: current, tweetInput: ""} )
        console.log(this.state.currentTweets);

        /*axios.post(`https://jsonplaceholder.typicode.com/users`, { tweetInput })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });*/
    };

 
    render() {
        //let firebaseRoot = this.props.config.databaseURL;
        return (
            <div className={classes.Tweeter} data-test="component-tweeter" >
                <Header />
                <TweetInput inputValue={this.state.tweetInput} tweetInputChanged={this.tweetInputChanged} tweetSubmited={this.tweetSubmited} />
                <TweetViewWindow tweets={this.state.currentTweets} />

            </div>
        );
    }
}

Tweeter.propTypes ={
    config: PropTypes.object
}

export default Tweeter;