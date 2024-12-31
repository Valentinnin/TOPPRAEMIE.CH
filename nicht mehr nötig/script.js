document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interestForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const interest = document.getElementById('interest').value;

        if (name && interest) {
            // Speichere den Namen und das Interesse in sessionStorage
            sessionStorage.setItem('userName', name);
            sessionStorage.setItem('userInterest', interest);

            // Encode the name to safely pass it in the URL
            const encodedName = encodeURIComponent(name);

            // Redirect to the appropriate HTML file in the Module folder
            const url = `module/Krankenkasse/templates/${interest}.html?name=${encodedName}`;
            window.location.href = url;
        }
    });
});