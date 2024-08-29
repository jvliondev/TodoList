import './styles.css';
import './home.css';
import './contact.css';
import './menu.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// Tab Switching Module
(function() {
    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', () => {
        clearContent();
        loadContact();
    });
})();

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

loadHome();
console.log('Index file loaded');
