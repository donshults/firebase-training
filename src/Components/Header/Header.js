import React from 'react';

import classes from './Header.css';

const Header = () => {
    return ( 
        <header className={classes.Header} data-test='component-header' >
            <h4>Tweeter</h4>
        </header>
     );
}
 
export default Header;