// General React
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Components
import NewPostForm from './newPostForm';
import Posts from './posts';

// Styles
import './styles.scss';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

// Requests
import { authenticate, logout, getPosts } from '../requests';


// Main app
const FeedLayout = () => {

    // State
    const [posts, setPosts] = useState(0);
    const [username, setUsername] = useState('');


    // Determine what posts to fetch by analyzing url
    const analyzeUrl = () => {

        const path_arr = window.location.pathname.split('/');

        // Clean up url
        if (path_arr[0] == "") { path_arr.shift() }

        // Set url to pass to getPosts function
        return (path_arr[0] == 'usr') ? path_arr[1] : null;
    }
    const user = analyzeUrl();


    useEffect(() => {

        // Make sure user is authenticated still
        authenticate((response) => {
            if (response.authenticated) {
                setUsername(response.username);
            } else {
                location.href = '/';
            }
        });

        // Retrieve posts
        getPosts(user, function(posts) {
            setPosts(posts);
        });

    }, []);

    return (
        <>
            <div className='top-bar'>
                <h3 className="username"><a href='/feed'>{ username }</a></h3>
                <button className='btn' onClick={ logout } >Log Out</button>
            </div>
            <div className="main-wrapper">
                <div className="side-bar">
                    <div className="photo-circle">
                        <FontAwesomeIcon icon={ faFeatherPointed } />
                    </div>
                    <NewPostForm />
                </div>
                <div className='content-area'>
                    <Posts posts={ posts } viewingUser={ `@${user}` } logged_in_user={ username }/>
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