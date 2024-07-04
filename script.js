document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interesseForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const interesse = document.getElementById('interesse').value;

        if (name && interesse) {
            // Encode the name to safely pass it in the URL
            const encodedName = encodeURIComponent(name);
            const url = `${interesse}.html?name=${encodedName}`;
            window.location.href = url;
        }
    });
});
