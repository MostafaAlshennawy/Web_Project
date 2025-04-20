// Handle form validation for login
document.getElementById('login-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would make an AJAX request to your server to check the email and password.
    // For now, this is a simple hard-coded example for the sake of demonstration.

    const registeredEmail = "user@example.com";  // Example email
    const registeredPassword = "password123";   // Example password

    if (email !== registeredEmail || password !== registeredPassword) {
        e.preventDefault();
        document.getElementById('login-error').textContent = "Incorrect email or password!";
    } else {
        // Store the logged-in username in localStorage for display on the home page
        localStorage.setItem('username', email.split('@')[0]); // Example username from email
    }
});
