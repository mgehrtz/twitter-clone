// General React
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import NewPostForm from './newPostForm';
import Posts from './posts';

// Styles
import './styles.scss';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";


// Main app
const FeedLayout = () => {

    return (
        <>
            <div className='top-bar'>
                <h3 className="username">@michaelgehrtz</h3>
                <button className='btn'>Log Out</button>
            </div>
            <div className="main-wrapper">
                <div className="side-bar">
                    <div className="photo-circle">
                        <FontAwesomeIcon icon={ faFeatherPointed } />
                    </div>
                    <NewPostForm />
                </div>
                <div className='content-area'>
                    <Posts />
                </div>
            </div>
        </>
    );

}


// Render
document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(
        document.getElementById('app')
    );
    root.render(<FeedLayout />);
});