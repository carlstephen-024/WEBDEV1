// file.js

// Smooth scrolling for anchor links, allow page navigation for others
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetID = href.substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If not starting with #, let the browser handle navigation
    });
});

// Example: Alert when "Get Started" button is clicked
document.querySelector('button').addEventListener('click', () => {
    alert('Thank you for getting started!');
});

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally handle signup logic, then redirect
        alert('Signup successful! Redirecting to login page.');
        window.location.href = 'login.html';
    });
}

// Redirect from login to index after form submission
const loginForm = document.querySelector('section#login form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally handle login logic, then redirect
        alert('Login successful! Redirecting to main landing page.');
        window.location.href = 'index.html';
    });
}

// Logout functionality
const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Logged out successfully!');
        window.location.href = 'login.html';
    });
}