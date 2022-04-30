// Imports
import $ from 'jquery';


// Setup
$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});


// Signup
export function signup(first_name, last_name, username, email, password) {

    $.ajax({
        type: 'POST',
        url: '/api/users',
        data: {
            user: {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                username: username
            }
        },
        success: function(response) {
            if (response.success) {
                login(username, password);
            }
        },
        error: function(err) {
            window.alert(err);
        }

    });

}

// Login
export function login(username, password) {

    $.ajax({
        type: 'POST',
        url: '/api/auth',
        data: {
            user: {
                username: username,
                password: password
            }
        },
        success: function(response) {
            if (response.success) {
                location.href = '/feed';
            } else {
                window.alert('Login failed. Please try again.');
            }
        },
        error: function(err) {
            window.alert(err);
        }

    });

}

// Authenticate user
export function authenticate(callback) {
    $.ajax({
        type: 'GET',
        url: '/api/auth',
        success: function(response) {
            callback(response);
        },
        error: function(err) {
            window.alert('Something went wrong. Please check console.');
            console.error(err.responseText);
        }
    });
}

// Logout
export function logout() {

    $.ajax({
        type: 'DELETE',
        url: '/api/auth',
        success: function(response) {
            if (response.success) {
                window.alert('You have been logged out.');
                location.href = '/';
            }
        },
        error: function(response) {
            window.alert(response);
        }
    });

}

// Create post
export function newPost(content, callback) {

    $.ajax({
        type: 'POST',
        url: '/api/posts',
        data: {
            post: {
                content: content
            }
        },
        success: function(response) {
            return callback(response);
        },
        error: function(error) {
            window.alert(error);
        }
    });

}

// Retrieve posts (all or by username)
export function getPosts(username, callback) {
    const url = (username) ? `/api/${username}/posts` : '/api/posts';

    $.ajax({
        type: 'GET',
        url: url,
        success: function(response) {
            callback(response)
        },
        error: function(err) {
            window.alert('Something went wrong. Please check the console for more information.');
            console.error(err.responseText);
        }
    });
}

// Delete post
export function deletePost(postID, callback) {
    $.ajax({
        type: 'DELETE',
        url: `/api/posts/${postID}`,
        success: function(response) {
            callback(response);
        },
        error: function(err) {
            window.alert('Something went wrong. Check the console.');
            console.error(err.responseText);
        }
    });
}

