document.addEventListener('DOMContentLoaded', function() {
    function setupToggle(buttonId, divId, name) {
        const toggleButton = document.getElementById(buttonId);
        const toggleDiv = document.getElementById(divId);

        toggleButton.addEventListener('click', function() {
            if (toggleDiv.classList.contains('hidden')) {
                toggleDiv.classList.remove('hidden');
                toggleButton.textContent = `Div ${name} verstecken`;
            } else {
                toggleDiv.classList.add('hidden');
                toggleButton.textContent = `Div ${name} anzeigen`;
            }
        });
    }

    setupToggle('toggleButtonEins', 'toggleDivEins', 'Eins');
    setupToggle('toggleButtonZwei', 'toggleDivZwei', 'Zwei');
    setupToggle('toggleButtonDrei', 'toggleDivDrei', 'Drei');
    setupToggle('toggleButtonVier', 'toggleDivVier', 'Vier');
});