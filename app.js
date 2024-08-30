const form = document.querySelector('form');

const defaults = {
    colour: "#000",
}
const preferences = defaults;

function defaultPreferences(event) {
    preferences = defaults;
}

form.addEventListener('submit', savePreferences);
function savePreferences(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const colour = formData.get('colour');
    const preferences = {
        colour,
    };
    localStorage.setItem("preferences", JSON.stringify(preferences));
}

function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    if (preferences) {
        const input = document.querySelector('input');
        input.value = preferences.colour || "#000";
        const body = document.querySelector('body');
        body.style.color = preferences.colour || defaults.colour;
    }
}

function clearPreferences(event) {
    event.preventDefault();
    localStorage.removeItem("preferences");
}


// on page load:
loadPreferences();