const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.open('C:\Users\gdebo\.vscode\DeBo_Dynamics\project\home\home.html', '_self');
    } else {
        alert('Invalid username or password.');
    }
});