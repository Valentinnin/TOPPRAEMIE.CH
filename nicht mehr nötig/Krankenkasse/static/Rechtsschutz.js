function showForm(formType) {
  console.log("showForm wurde aufgerufen mit formType:", formType);  // Debugging
  // Liste aller möglichen Formular-IDs
  const allForms = [
      'initial-options',
      'einzelperson'
      
  ];

  // Alle Formulare ausblenden
  allForms.forEach(formId => {
      document.getElementById(formId).style.display = 'none';
  });

  // Das gewählte Formular anzeigen
  switch(formType) {
      case 'einzelperson':
          document.getElementById('einzelperson').style.display = 'block';
          break;
      case 'mehrperson':
          document.getElementById('mehrperson').style.display = 'block';
          break;
      default:
          // Wenn kein gültiger formType übergeben wurde, zeigen wir die initial-options
          document.getElementById('initial-options').style.display = 'block';
  }
}
/*
//test ob alle formfelder übertagen werden
document.getElementById('einzelperson').addEventListener('submit', function(event) {
  // Verhindert, dass das Formular tatsächlich gesendet wird
  event.preventDefault();

  // Erstelle ein FormData-Objekt aus dem Formular
  const formData = new FormData(this);

  // Erstelle ein leeres Objekt, um die Formulardaten zu speichern
  const formValues = {};

  // Iteriere durch die FormData-Einträge und füge sie dem Objekt hinzu
  formData.forEach((value, key) => {
      formValues[key] = value;
  });

  // Zeige das Ergebnis in der Konsole an
  console.log(formValues);

  // Optional: Jetzt könntest du das Formular absenden, wenn alle Daten korrekt sind
  // event.target.submit();
});*/

// Funktion zum Deaktivieren des Select-Elements, basierend auf dem Radio-Button
// Wähle die Radio Buttons und das Select-Element aus
const radioJa = document.getElementById('gesellschaftJa');
const radioNein = document.getElementById('gesellschaftNein');
const selectGesellschaft = document.getElementById('gesellschaft');

// Füge Event-Listener für die Radio Buttons hinzu
radioJa.addEventListener('change', function() {
    if (radioJa.checked) {
        selectGesellschaft.disabled = false; // Aktiviert das Select-Element
    }
});

radioNein.addEventListener('change', function() {
    if (radioNein.checked) {
        selectGesellschaft.disabled = true; // Deaktiviert das Select-Element
        selectGesellschaft.value = ""; // Setzt den Wert zurück
    }
});