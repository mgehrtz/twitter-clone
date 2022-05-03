import React, { useState } from "react";
import { newPost } from '../requests';

function NewPostForm() {

    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        newPost(content, function(resp) {
            if (resp.success) {
                location.reload();
            }
        });
    }

    const handleChange = (event) => { setContent(event.target.value) }

    return (
        <form id='new-post-form' onSubmit={ handleSubmit }>
            <h4>Say something great...</h4>
            <textarea onChange={ handleChange }></textarea>
            <input type='submit' value='Create post' className="btn dark"></input>
        </form>
    );

}

export default NewPostForm;