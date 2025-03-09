
// Get the last modified date of the document
const lastModified = document.lastModified;

// Get the placeholder element in the footer
const lastModifiedElement = document.getElementById('lastModified');

// Insert the last modified date into the placeholder
lastModifiedElement.textContent = `Last modified: ${lastModified}`;


function initializeWebSocket() {
    // Your WebSocket initialization logic
    const socket = new WebSocket('ws://example.com');
    socket.onopen = function () {
        console.log('WebSocket connection established');
    };
}


const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    modeButton.checked = true;
}

modeButton.addEventListener("change", () => {
    if (modeButton.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');

    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
        console.log("Dark moded disabled");
    }

});

function getlastDateVisited() {
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        return new Date(lastVisit);
    }
    return null;
}

function saveVisitDate() {
    const currentDate = new Date();

    localStorage.setItem('lastVisit', currentDate.toString());
}

function visitWithinADay(lastVisit) {
    const currentDate = new Date();
    const timeDifference = currentDate - lastVisit;
    const dayInMS = 24 * 60 * 60 * 1000;
    return timeDifference < dayInMS;
}

function daysBetweenVisits(lastVisit) {
    const currentDate = new Date();
    const timeDiff = currentDate - lastVisit; // Time difference in milliseconds
    const oneDayInMillis = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return Math.floor(timeDiff / oneDayInMillis); // Calculate full days between visits
}

window.onload = function () {

    const lastVisit = getlastDateVisited();
    const lastVisitDateELem = document.getElementById('last-visited');
    const visitedMessage = document.getElementById('site-visited-message');

    if (lastVisit) {

        if (visitWithinADay(lastVisit)) {
            visitedMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitedMessage.textContent = "";
            const daysBetween = daysBetweenVisits(lastVisit);
            if (daysBetween > 1 && daysBetween < 2) {
                visitedMessage.textContent = `You last visited ${daysBetween} day ago.`;
            } else {
                visitedMessage.textContent = `You last visited ${daysBetween} days ago.`;
            }
        }
        lastVisitDateELem.textContent = lastVisit.toLocaleString();
    } else {
        visitedMessage.textContent = 'Welcome! Let us know if you have any questions.';
    }

    saveVisitDate();
}



