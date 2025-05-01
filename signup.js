
document.getElementById('signup-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
   
    if (password !== confirmPassword) {
        e.preventDefault();
        document.getElementById('password-error').textContent = "Passwords do not match!";
        return false;
    }

    if (!username || !email || !password || !confirmPassword) {
        e.preventDefault();
        alert("Please fill in all fields!");
    }
});
