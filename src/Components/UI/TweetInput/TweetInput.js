import React from 'react';
import PropTypes from 'prop-types';

import './TweetInput.css';

const TweetInput = (props) => {
    return (
        <div className="TweetInput" data-test='component-tweet-input' >

            <form onSubmit={props.tweetSubmited}  >
                <input  type="text" name="tweetInput" value={props.inputValue} onChange={props.tweetInputChanged} onClick={props.clearInput} />
                <button type='submit'>Tweet</button>
            </form>
        </div>
    );
}

TweetInput.propTypes ={
    tweetInputChanged: PropTypes.func,
    tweetSubmited: PropTypes.func,
    inputValue: PropTypes.string
}

export default TweetInput;