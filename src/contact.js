function loadContact() {
    // Clear existing content
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';

    // Create elements for the contact section
    const h2HeaderDiv = document.createElement('div');
    const h2Header = document.createElement('h2');
    h2HeaderDiv.classList.add('h2HeaderDiv');
    h2Header.classList.add('h2Header');
    h2Header.textContent = 'Contact Us';
    mainContent.appendChild(h2HeaderDiv);
    h2HeaderDiv.appendChild(h2Header);

    // Paragraph with contact information
    const contactPDiv = document.createElement('div');
    const contactP = document.createElement('p');
    contactPDiv.classList.add('contactPDiv');
    contactP.innerHTML = `
        The Bear <br>
        Location: Somewhere in Texas <br>
        Hours: 8am - 12pm Mon - Fri <br>
        Phone: 888-888-BEAR
    `;
    mainContent.appendChild(contactPDiv);
    contactPDiv.appendChild(contactP);

    // Form container
    const formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');

    // Create the form element
    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('action', '/submit');
    form.setAttribute('method', 'post');

    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', 'true');

    // Email input
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', 'true');

    // Reservation radio buttons
    const reserveLabel = document.createElement('p');
    reserveLabel.textContent = 'Reserve: ';
    const yesRadio = document.createElement('input');
    yesRadio.setAttribute('type', 'radio');
    yesRadio.setAttribute('id', 'yes');
    yesRadio.setAttribute('name', 'reservation');
    yesRadio.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'yes');
    yesLabel.textContent = 'Yes';

    const noRadio = document.createElement('input');
    noRadio.setAttribute('type', 'radio');
    noRadio.setAttribute('id', 'no');
    noRadio.setAttribute('name', 'reservation');
    noRadio.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'no');
    noLabel.textContent = 'No';

    // Subscribe checkbox
    const subscribeLabel = document.createElement('label');
    subscribeLabel.setAttribute('for', 'subscribe');
    subscribeLabel.textContent = 'Subscribe to newsletter: ';
    const subscribeCheckbox = document.createElement('input');
    subscribeCheckbox.setAttribute('type', 'checkbox');
    subscribeCheckbox.setAttribute('id', 'subscribe');
    subscribeCheckbox.setAttribute('name', 'subscribe');

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('contactSubmit');

    // Append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(reserveLabel);
    form.appendChild(yesRadio);
    form.appendChild(yesLabel);
    form.appendChild(noRadio);
    form.appendChild(noLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(subscribeLabel);
    form.appendChild(subscribeCheckbox);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Append form to the formDiv and formDiv to mainContent
    formDiv.appendChild(form);
    mainContent.appendChild(formDiv);
}

export default loadContact;
console.log('Contact file loaded');
