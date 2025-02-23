

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

// initialize element variable for displaying pg visits
const pageVisits = document.querySelector(".visits");

// get stored value of numVisits in localStorage if it exists. If it doesn't, set it to 0 "Number" changes string to int
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// if not first visit, pageVisits == number of visits - otherwise, it is the first visit and welcome message is displayed
if (numVisits !== 0) {
	pageVisits.textContent = "Page Visits: " + numVisits;
} else {
	pageVisits.textContent = `This is your first visit. Welcome!`;
}

// number of visits is incremented by 1
numVisits++;

// set numVisits to new visit amount
localStorage.setItem("numVisits-ls", numVisits);

