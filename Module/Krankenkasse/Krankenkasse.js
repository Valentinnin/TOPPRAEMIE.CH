document.addEventListener('DOMContentLoaded', function() {
    const userName = sessionStorage.getItem('userName');
    const welcomeMessage = document.getElementById('welcome-message');
    if (userName) {
        welcomeMessage.textContent = `Hallo ${userName}, willkommen zu deinem kostenlosen Krankenkassenvergleich`;
    }

    document.getElementById('beratung-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('offerte-form').addEventListener('submit', handleFormSubmit);
});

function showForm(formType) {
    document.getElementById('initial-options').style.display = 'none';
    if (formType === 'beratung') {
        document.getElementById('beratung-form').style.display = 'block';
        document.getElementById('offerte-form').style.display = 'none';
    } else {
        document.getElementById('beratung-form').style.display = 'none';
        document.getElementById('offerte-form').style.display = 'block';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    // Here you would typically send the data to a server
    alert('Formular wurde gesendet! Wir werden uns bald bei Ihnen melden.');
}

function addPerson() {
    alert('Funktion zum Hinzufügen einer Person wird implementiert.');
    // Here you would typically add fields for an additional person
}