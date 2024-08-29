import loadMenu from './menu.js';

function loadHome() {
    const mainContent = document.querySelector('#content');
    const createH1Div = document.createElement('div');
    const h1Slogan = document.createElement('h1');
    const foodimageDiv = document.createElement('div');
    const foodimage = document.createElement('div');

    function clearContent() {
        const content = document.querySelector('#content');
        content.innerHTML = '';
    }

    createH1Div.classList.add('h1Container');
    h1Slogan.classList.add('h1Slogan');
    foodimageDiv.classList.add('foodimageDiv');
    foodimage.classList.add('foodimage');

    h1Slogan.textContent = 'Welcome to The Bear!';

    mainContent.appendChild(createH1Div);
    createH1Div.appendChild(h1Slogan);
    mainContent.appendChild(foodimageDiv);
    foodimageDiv.appendChild(foodimage);

    document.querySelector('.foodimage').addEventListener('mouseover', function() {
        setTimeout(() => {
            clearContent();
            loadMenu();
        }, 500);
    });
}

export default loadHome;
console.log('Home file loaded');
