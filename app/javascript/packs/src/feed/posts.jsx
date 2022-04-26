import React from "react";

import './posts.scss';

function Posts() {

    return (
        <div className="posts-wrapper">
            <div className="post">
                <p className="post-content">this is a great post.</p>
                <div className="meta-wrapper">
                    <button className="btn delete">Delete</button>
                    <a href='#' className="username">@michaelgehrtz</a>
                </div>
            </div>
        </div>
    );

}

export default Posts;