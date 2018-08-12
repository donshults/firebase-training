import React from 'react';
import PropTypes from 'prop-types';

const UserForm = (props) => {
  let userName = "";
  let userEmail = "";
  
  console.log(props.selectedUser);
  if(props.selectedUser){
    userName = props.selectedUser.name;
    userEmail = props.selectedUser.email;
  }
  return (
    <div>
        <input name="currentUserName" type="text" value={userName} onChange={props.handleChange} disabled />
        <input name="currentUserKey" type="text" value={userEmail} onChange={props.handleChange}  disabled/>
    </div>
  )
}

UserForm.propTypes ={
    selectedUser: PropTypes.object,
    
}
export  default UserForm;
