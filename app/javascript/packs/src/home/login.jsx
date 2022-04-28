import React from "react";
import './login.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            form_is_visible: false
        }

        this.toggleView = this.toggleView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        // Add event listener for clicks
        document.addEventListener('click', (event) => {

            // If clicked outside login wrapper and is visible, close form
            if (!document.querySelector('.login-wrapper').contains(event.target)) {
                if (this.state.form_is_visible) {
                    this.setState({ form_is_visible: false });
                }
            }
        });
    }

    toggleView() {
        const isVisible = this.state.form_is_visible;
        this.setState({ form_is_visible: !isVisible });
    }

    handleChange(event) {
        const state_name = event.target.name;
        this.setState({ [state_name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        
        const { username } = this.state;

        const activeClass = (this.state.form_is_visible) ? 'active' : "";

        return (
            <div className="login-wrapper">
                <button className="btn login" onClick={ this.toggleView }>Log in</button>
                <form id="login-form" className={ activeClass } onSubmit={ this.handleSubmit }>
                    <h3 className="title">Log in</h3>
                    <input name="username" placeholder="username" type="text" value={ username } onChange={ this.handleChange }></input>
                    <input name="password" placeholder="password" type="password" onChange={ this.handleChange }></input>
                    <input type="submit" value="Log in" className="btn dark"></input>
                </form>
            </div>
        );
    }
}

export default LoginForm;