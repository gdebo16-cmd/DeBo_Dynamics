const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Front-end mock only. There is no real account system yet.
// Submitting the form continues to the public home page.
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = '../home/home.html';
    });
}
