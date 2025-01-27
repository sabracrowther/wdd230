

// Get the last modified date of the document
const lastModified = document.lastModified;

// Get the placeholder element in the footer
const lastModifiedElement = document.getElementById('lastModified');

// Insert the last modified date into the placeholder
lastModifiedElement.textContent = `Last modified: ${lastModified}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

