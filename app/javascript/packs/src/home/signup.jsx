import React from "react";
import '../requests';
import { login, signup } from "../requests";
import './signup.scss';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            confirm_password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const input_name = event.target.name;
        this.setState({ [input_name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Validation
        if ((this.state.password != this.state.confirm_password) || (this.state.password == "")) {
            this.setState({
                errors: 'The passwords do not match or do not meet minimum requirements.'
            });
            return;
        }

        const { first_name, last_name, username, email, password } = this.state;

        signup(first_name, last_name, username, email, password);

    }

    render() {
        return (
            <form id='signup-form' onSubmit={ this.handleSubmit }>
                <h3>Sign Up</h3>
                <hr/>
                <input type='text' name='first_name' placeholder='First Name' value={ this.state.first_name } onChange={ this.handleChange }></input>
                <input type='text' name='last_name' placeholder='Last Name' value={ this.state.last_name } onChange={ this.handleChange }></input>
                <input type='text' name='username' placeholder='Username' value={ this.state.username } onChange={ this.handleChange }></input>
                <input type='email' name='email' placeholder='Email' value={ this.state.email } onChange={ this.handleChange }></input>
                <input type='password' name='password' placeholder='Password' onChange={ this.handleChange }></input>
                <input type='password' name='confirm_password' placeholder='Confirm password' onChange={ this.handleChange }></input>
                <input type='submit' value='Create Account' className='btn dark'></input>
            </form>
        );
    }

}

export default SignupForm;