import React from 'react';
import PropTypes from 'prop-types';
import classes from './TweetViewWindow.css';


const TweetViewWindow = (props) => {
    const convo = props.tweets.map(({tweet, id}) => {
        return <li key={id}>{tweet}</li>
    });

    return (
        <div className={classes.TweetViewWindow} data-test='component-tweet-window' >
            <ul>
            {convo}
            </ul>
        </div>
    );
}

TweetViewWindow.propTypes ={
    tweets: PropTypes.array
}

export default TweetViewWindow;