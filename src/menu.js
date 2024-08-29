

function loadMenu() {
    // Ensure the content element exists
    const content = document.getElementById('content');
    if (!content) {
        console.error("Content element not found!");
        return;
    }

    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    content.appendChild(menuContainer);

    // Load images dynamically using Webpack's require.context
    const images = require.context('./images', false, /\.(png|jpe?g|gif)$/);

    // MenuItem class for each menu item
    class MenuItem {
        constructor(imageSrc, title, description, calories, rating) {
            this.imageSrc = imageSrc;
            this.title = title;
            this.description = description;
            this.calories = calories;
            this.rating = rating;
        }

        createMenuItem() {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Image Div
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            imageDiv.style.backgroundImage = `url(${this.imageSrc})`;
            menuItem.appendChild(imageDiv);

            // Background Div
            const backgroundDiv = document.createElement('div');
            backgroundDiv.classList.add('background');

            // Title and Description
            const titleDiv = document.createElement('div');
            const titleElement = document.createElement('h3');
            titleElement.textContent = this.title;
            titleElement.classList.add('menuTitle');
            titleDiv.appendChild(titleElement);

            const descriptionDiv = document.createElement('div');
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = this.description;
            descriptionElement.classList.add('menuDescription');
            descriptionDiv.appendChild(descriptionElement);

            const titleAndDescriptionDiv = document.createElement('div');
            titleAndDescriptionDiv.classList.add('titleAndDescriptionDiv');
            titleAndDescriptionDiv.appendChild(titleDiv);
            titleAndDescriptionDiv.appendChild(descriptionDiv);
            backgroundDiv.appendChild(titleAndDescriptionDiv);

            // Border shadow div
            const borderShadowDiv = document.createElement('div');
            borderShadowDiv.classList.add('border-shadow');
            backgroundDiv.appendChild(borderShadowDiv);

            // Rating and Calories
            const ratingCaloriesDiv = document.createElement('div');
            ratingCaloriesDiv.classList.add('rating-calories');
            const caloriesElement = document.createElement('span');
            caloriesElement.classList.add('caloriesText');
            caloriesElement.textContent = `${this.calories} calories`;
            const ratingElement = document.createElement('span');
            ratingElement.classList.add('ratingText');
            ratingElement.textContent = `⭐ ${this.rating}`;
            ratingCaloriesDiv.appendChild(caloriesElement);
            ratingCaloriesDiv.appendChild(ratingElement);
            backgroundDiv.appendChild(ratingCaloriesDiv);

            // Append backgroundDiv to menuItem
            menuItem.appendChild(backgroundDiv);

            return menuItem;
        }
    }

    // Menu items array
    const menuItems = [
        new MenuItem(images('./homeFood.png'), 'King Pao Fish', 'Savory & Spicy', 250, 4.5),
        new MenuItem(images('./beefPlate.png'), 'Spring Beef Platoon', 'Tangy and Wild', 700, 4.9),
        new MenuItem(images('./chickenSalad.png'), 'The Michael', 'Unpleasantly Good', 200, 4.0),
        new MenuItem(images('./homeFood.png'), "Sydney's Donut", 'Sweeping Delightful', 300, 4.4),
        new MenuItem(images('./homeFood.png'), 'The Chocolate Banana', 'Surprisingly simple', 800, 4.1),
        new MenuItem(images('./homeFood.png'), "Mikey's Spaghetti", 'Like A Can Of Whoopass', 1300, 5.0)
    ];

    // Append each menu item to the container
    menuItems.forEach(item => menuContainer.appendChild(item.createMenuItem()));
}

console.log('Menu.js loaded');
export default loadMenu;

