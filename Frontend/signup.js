document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form'); // Assuming the form has an id 'form'
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('cpassword');
    const submitButton = document.getElementById('sin');

    // Validation function
    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Username validation
        if (username.value.trim() === "") {
            showError(username, "Username is required");
            isValid = false;
        }

        // Email validation
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, "Invalid email format");
            isValid = false;
        }

        // Password validation
        if (password.value.trim() === "") {
            showError(password, "Password is required");
            isValid = false;
        } else if (password.value.trim().length < 6) {
            showError(password, "Password must be at least 6 characters long");
            isValid = false;
        }

        // Confirm password validation
        if (confirmPassword.value.trim() === "") {
            showError(confirmPassword, "Please confirm your password");
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Passwords do not match. Please try again.");
            isValid = false;
        }

        return isValid;
    }

    // Email validation function (simple regex for email format)
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Show error message function
    function showError(input, message) {
        const inputBox = input.parentElement;
        const errorDiv = inputBox.querySelector('.error');
        errorDiv.innerText = message;
        inputBox.classList.add('error');  // Add error class for styling
    }

    // Clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.innerText = '');
        const inputBoxes = document.querySelectorAll('.inputBox');
        inputBoxes.forEach(box => box.classList.remove('error'));
    }

    // Event listener for submit button
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent form submission
        if (validateForm()) {
            alert("Form is valid! Redirecting to login page...");
            // Redirect to login.html page
            window.location.href = 'login.html'; // Redirects the user to login.html
        } else {
            alert("Please fix the errors and try again.");
        }
    });
});
