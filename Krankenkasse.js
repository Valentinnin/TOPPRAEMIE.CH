document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `Willkommen, ${decodeURIComponent(name)}!`;
    }
});
