// Handle form validation for sign-up
document.getElementById('signup-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        e.preventDefault();
        document.getElementById('password-error').textContent = "Passwords do not match!";
        return false;
    }

    // You can add additional validation checks for username, email, etc.
    if (!username || !email || !password || !confirmPassword) {
        e.preventDefault();
        alert("Please fill in all fields!");
    }
});
