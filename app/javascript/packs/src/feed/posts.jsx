import React, { useEffect, useState } from "react";
import { deletePost } from '../requests';
import swal from 'sweetalert';
import './posts.scss';


function Posts(props) {

    const username = props.logged_in_user;
    const isViewingUser = (username == props.viewingUser) ? false : true;
    const [posts, updatePosts] = useState(props.posts);


    // Update posts state
    useEffect(() => { updatePosts(props.posts) }, [props.posts]);


    // Handle delete
    function handleClick(event) {
        swal({
            title: "Are you sure?",
            text: "This can't be undone.",
            icon: "warning",
            buttons: {
                cancel: "Cancel",
                delete: "Yes, delete."
            }
        }).then((resp) => {
            if (resp == 'delete') {
                event.target.closest('.post').classList.add('deleting');
                const postID = event.target.closest('.post').dataset.id;
        
                // Delete from database
                setTimeout(function() {
                    deletePost(postID, function(response) {
                        // If successful delete
                        if (response.success) {
                            updatePosts(posts.filter(post => post.id != postID));
                        }
                    });
                }, 700);
            }
        });
    }


    // Inital loading block
    if (posts == 0) {
        return (
            <div className="posts-wrapper">
                <p>Loading posts...</p>
            </div>
        );
    }


    return (
        <div className="posts-wrapper">
            { isViewingUser || <h2>Viewing posts by { props.viewingUser }</h2> }
            { isViewingUser && <h2>Your feed:</h2> }
            <div className="inner-wrapper">
                { posts.map((post) => 
                    <div className="post" data-id={ post.id } key={ post.id }>
                        <p className="post-content">{ post.content }</p>
                        <div className="meta-wrapper">
                            { username == post.username && <button className="btn delete" onClick={ handleClick }>Delete</button> }
                            <a href={ '/usr/' + post.username.replace('@', "") + '/feed' } className="username">{ post.username }</a>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Posts;



