// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import LoginForm from './login';
import SignupForm from './signup';

// Requests
import '../requests';

// Styles
import './home.scss';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";


const HomeLayout = () => {

    return (
        <>
            <LoginForm />
            <div className="col-wrapper">
                <div className="left col">
                    <FontAwesomeIcon icon={ faFeatherPointed } />
                </div>
                <div className="right col">
                    <SignupForm />
                </div>
            </div>
        </>
    );

}

// Render
document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<HomeLayout />);
});