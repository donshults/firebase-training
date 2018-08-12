
import React, { Component } from 'react'
import firebase from '../../firebase';

export default class UserForm extends Component {
    constructor(){
        super();
        this.state ={
            currentItem: '',
            username: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const usersRef = firebase.database().ref('users');
        const user = {
            username: this.state.username,
            email: this.state.email
        }
        usersRef.push(user);
        this.setState({
            username: '',
            email: ''
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" name="username" placeholder="Name" onChange={this.handleChange} />
            <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
            <button>Add Item</button>
        </form>
      </div>
    )
  }
}
