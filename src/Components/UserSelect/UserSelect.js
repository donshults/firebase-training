import React from 'react'
import PropTypes from 'prop-types';


const UserSelect = (props) => {
    if (props.users) { }
    let userList = props.users.map(({ name, email, id }) => {
        return <option key={id} value={id}>{name}</option>
    });

    return (
        <select onChange={props.changeHandler} data-test="component-user-select" >
            {userList}
        </select>

    );

    UserSelect.propTypes = {
        users: PropTypes.array,
        changeHandler: PropTypes.func
    }
}

export default UserSelect;
