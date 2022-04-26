import React from "react";

import './signup.scss';

function SignupForm() {

    return (
        <form id='signup-form'>
            <h3>Sign Up</h3>
            <hr/>
            <input type='text' name='first_name' placeholder='First Name'></input>
            <input type='text' name='last_name' placeholder='Last Name'></input>
            <input type='text' name='username' placeholder='Username'></input>
            <input type='email' name='email' placeholder='Email'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <input type='password' name='confirm_password' placeholder='Confirm password'></input>
            <input type='submit' value='Create Account' className='btn dark'></input>
        </form>
    );

}

export default SignupForm;