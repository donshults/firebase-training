import React from 'react';
import axios from 'axios';

class PersonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>


        );
    }
}

export default PersonInput;