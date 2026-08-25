


const buttonFirst = document.getElementById('darkMode');
const buttonSecond = document.getElementById('lightMode');
const themeLink = document.querySelector('#theme-style')


buttonFirst.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'home.css') {
        themeLink.setAttribute('href', 'home1.css');
        darkMode.replaceChild(document.createTextNode('Dark Mode'), darkMode.firstChild);
    } else {
        themeLink.setAttribute('href', 'home.css');
        darkMode.replaceChild(document.createTextNode('Light Mode'), darkMode.firstChild);
    }
});