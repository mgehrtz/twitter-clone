import React from "react";

function NewPostForm() {

    return (
        <form id='new-post-form'>
            <h4>Say something great...</h4>
            <textarea></textarea>
            <input type='submit' value='Create post' className="btn dark"></input>
        </form>
    );

}

export default NewPostForm;