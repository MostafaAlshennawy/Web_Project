document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const logoutButton = document.getElementById('logout-button');

    const username = localStorage.getItem('username');

    if (username) {
        usernameDisplay.innerHTML = `Welcome, <strong>${username}</strong>`;
    } else {
        window.location.href = "login.html";
    }


    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('username');
        window.location.href = "login.html";  
    });
});
