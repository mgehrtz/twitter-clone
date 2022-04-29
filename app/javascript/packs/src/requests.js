// Imports
import $ from 'jquery';


// Setup
$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});


// Singup
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
            }
        },
        error: function(err) {
            window.alert(err);
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
