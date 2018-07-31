import React from 'react';

import './TweetInput.css';

const TweetInput = (props) => {
    return (
        <div className="TweetInput">

            <form onSubmit={props.tweetSubmited}  >
                <input  type="text" name="tweetInput" onChange={props.tweetInputChanged} />
                <button type='submit'>Tweet</button>
            </form>
        </div>
    );
}

export default TweetInput;