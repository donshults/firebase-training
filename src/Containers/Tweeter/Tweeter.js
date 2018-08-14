import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/Header';
import TweetViewWindow from '../../Components/UI/TweetViewWindow/TweetViewWindow';
import TweetInput from '../../Components/UI/TweetInput/TweetInput';
import UserForm from '../../Components/UserForm/UserForm';
import UserSelect from '../../Components/UserSelect/UserSelect';

import firebase from '../../firebase';

import axios from 'axios';

import classes from '../Tweeter/Tweeter.css'

class Tweeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            followedUsers: [],
            currentTweets: [],
            tweetInput: "",
            selectedId: "",
            selectedUser: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmited = this.handleSubmited.bind(this);
    };


    componentDidMount() {
        this.getUsers();
    }
    /**
     * GetUsers
     * Retrieve a list of users from firebase
     * @returns array
     */
    getUsers = () => {
        const usersRef = firebase.database().ref('users');

        usersRef.once('value', (snap) => {
            let users = snap.val();
            let newState = [];
            let selectedid = undefined;
            let selecteduser = undefined;

            for (let user in users) {
                let tempFollowing = [];
                let tempTweets = []
                console.log("tempTweets: " + typeof users);

                for(let follower in users[user].following){

                    tempFollowing.push({
                        id: follower
                    })
                }
                tempTweets = this.getTweets(users[user].tweets);

                newState.push({
                    id: user,
                    name: users[user].name,
                    email: users[user].email,
                    following: tempFollowing,
                    tweets: tempTweets
                });
            }

            if (newState.length) {
                selectedid = newState[0].id;
                selecteduser = {
                    id: newState[0].id,
                    name: newState[0].name,
                    email: newState[0].email
                }
            }

            this.setState({
                users: newState,
                selectedId: selectedid,
                selectedUser: selecteduser,
            });
        });

    }
    getTweets = (tweets) =>{
        let tweetArray = [];
        let newTweet = undefined;
        for(let current in tweets){
            console.log(current);
            newTweet = {
                "tweet": tweets[current]
            }
            tweetArray.push(newTweet);
        }
        return tweetArray;
    };

    getUserById = (key) => {
        const usersRef = firebase.database().ref('users');
        const userRef = usersRef.child(key);
        let selecteduser = undefined;
        let tempFollowing = [];
        let tempTweets = []
        userRef.on('value', (snap) => {
            const userObj = snap.val();
            userRef.child("following").once('value', (snap) =>{
                this.setFollowing(snap.val());
            });
            userRef.child("tweets").once('value', (snap) =>{
                this.setTweets(snap.val());
            });
            if (userObj) {
                selecteduser = {
                    id: key,
                    name: userObj.name,
                    email: userObj.email,
                    following: tempFollowing,
                    tweets: tempTweets
                }               
            }
            this.setState({
                selectedUser: selecteduser
            });
        });
    }
    setTweets = (key) =>{
        console.log("getTweets: "+key);
    };
    setFollowing = (key) =>{
        const usersRef = firebase.database().ref('users');

    }

    getUserByEmail = (key) => {
        const usersRef = firebase.database().ref('users');
        console.log("getUser: " + key);
        usersRef.on('value', (snap) => {
            let users = snap.val();
            let selecteduser = undefined;
            for (let user in users) {
                const tempEmail = users[user].email;
                if (key === tempEmail) {
                    selecteduser = {
                        id: user,
                        name: users[user].name,
                        email: users[user].email
                    }
                    break;
                }
            }

            this.setState({
                selectedUser: selecteduser
            });

        });
    }


    /**
     * createNewUser
     * Add a new user to the Database
     * 
     */
    createNewUser = (userName, emailAddress) => {
        const usersRef = firebase.database().ref('users');
        const user = {
            name: userName,
            email: emailAddress
        }
        usersRef.push(user);
        return user;
    }

    setUserInfo = (snap) => {
        console.log("setUserInfo: " + snap);
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmited = event => {
        event.preventDefault();
        const userRef = firebase.database().ref('users');
        const user = {
            email: this.state.selectedValue
        }
        userRef.push(user);
    }

    handleSelectChange = (event) => {
        var key = event.target.value;
        const usersRef = firebase.database().ref('users');
        console.log("handleSelectChange: " + key)
        //this.getUserByEmail(key);
        this.getUserById(key);
    };

    /*tweetInputChanged = event => {
        console.log(event.target.value);
        this.setState({ tweetInput: event.target.value });
    };*/


    tweetSubmited = event => {
        event.preventDefault();
        let current = this.state.currentTweets;
        let newTweet = { id: current.length, tweet: this.state.tweetInput }
        current.push(newTweet);
        this.setState({ currentTweets: current, tweetInput: "" })
        console.log("tweetSubmited: " + this.state.currentTweets);

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
                <UserSelect users={this.state.users} changeHandler={this.handleSelectChange} />
                <UserForm selectedUser={this.state.selectedUser} handleChange={this.handleChange} />
                <TweetInput inputValue={this.state.tweetInput} tweetInputChanged={this.handleChange} tweetSubmited={this.tweetSubmited} />
                <TweetViewWindow tweets={this.state.currentTweets} />
                <button onClick={() => this.createNewUser(this.state.currentUserEmail)}>Create New User</button>
            </div>
        );
    }
}



export default Tweeter;