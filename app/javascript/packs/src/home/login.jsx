import React from "react";
import './login.scss';

function LoginForm() {

    return (
        <div className="login-wrapper">
            <button className="btn login">Log in</button>
            <form id="login-form">
                <h3 className="title">Log in</h3>
                <input name="username" placeholder="username" type="text"></input>
                <input name="password" placeholder="password" type="passowrd"></input>
                <input type="submit" value="Log in" className="btn dark"></input>
            </form>
        </div>
    );
}

export default LoginForm;