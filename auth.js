document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');

    // Validate login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (validateEmail(email) && password.length >= 6) {
            alert('Login successful!');
        } else {
            alert('Invalid login credentials');
        }
    });

    // Validate signup form
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (username && validateEmail(email) && password.length >= 6 && password === confirmPassword) {
            alert('Sign-up successful!');
        } else {
            alert('Please check your sign-up details.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
