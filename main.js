// Check if the user is logged in and show their username
document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const logoutButton = document.getElementById('logout-button');

    // Check if the user is logged in by fetching the username from localStorage
    const username = localStorage.getItem('username');

    if (username) {
        // Show the username if logged in
        usernameDisplay.innerHTML = `Welcome, <strong>${username}</strong>`;
    } else {
        // If no user is logged in, redirect to the login page
        window.location.href = "login.html";
    }

    // Handle logout
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('username');
        window.location.href = "login.html";  // Redirect to login page
    });
});
