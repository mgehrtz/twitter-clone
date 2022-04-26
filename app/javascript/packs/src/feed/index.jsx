// General React
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import NewPostForm from './newPostForm';

// Styles
import './styles.scss';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";


// Main app
const FeedLayout = (props) => {

    return (
        <>
            <div className='top-bar'>
                <h3 className="username">@michaelgehrtz</h3>
                <button className='btn'>Log Out</button>
            </div>
            <div className="side-bar">
                <div className="photo-circle">
                    <FontAwesomeIcon icon={ faFeatherPointed } />
                </div>
                <NewPostForm />
            </div>
            <div className='content-area'></div>
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