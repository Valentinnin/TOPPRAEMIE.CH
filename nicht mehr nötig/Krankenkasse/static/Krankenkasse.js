
// Funktion zur Anzeige des entsprechenden Formulars
function showForm(formType) {
    // Liste aller möglichen Formular-IDs
    const allForms = [
        'initial-options',
        'beratung-form',
        'offerte-page1',
        'offerte-page-2',
        'offerte-page-3'
    ];

    // Alle Formulare ausblenden
    allForms.forEach(formId => {
        document.getElementById(formId).style.display = 'none';
    });

    // Das gewählte Formular anzeigen
    switch(formType) {
        case 'beratung':
            document.getElementById('beratung-form').style.display = 'block';
            break;
        case 'offerte1':
            document.getElementById('offerte-page1').style.display = 'block';
            break;
        case 'offerte2':
            document.getElementById('offerte-page-2').style.display = 'block';
            break;
        case 'offerte3':
            document.getElementById('offerte-page-3').style.display = 'block';
            break;
        default:
            // Wenn kein gültiger formType übergeben wurde, zeigen wir die initial-options
            document.getElementById('initial-options').style.display = 'block';
    }
}


// Kombinierte Funktion zur Altersüberprüfung und Formularverarbeitung
function handleFormSubmit(event) {
    event.preventDefault(); // Verhindert das automatische Absenden, bis die Altersüberprüfung abgeschlossen ist

    // Geburtsdatum überprüfen
    const birthDate = new Date(document.getElementById("geburtsdatumberatung").value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Überprüfen, ob der Benutzer tatsächlich 16 Jahre alt ist
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Altersüberprüfung: Wenn das Alter unter 16 ist, zeige eine Warnung und brich ab
    if (age < 16) {
        alert("Du musst mindestens 16 Jahre alt sein, um das Formular abzusenden.");
        return; // Stoppt das Formular, wenn der Benutzer zu jung ist
    }

    // Zeige die Bestätigungsmeldung nach erfolgreicher Überprüfung
    alert('Formular wurde gesendet! Wir werden uns bald bei Ihnen melden.');

    // Wenn die Altersüberprüfung erfolgreich ist, verarbeite die Formulardaten
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);

    // Formular tatsächlich absenden, nachdem alle Prüfungen bestanden sind
    event.target.submit(); // Dies sendet das Formular, nachdem der Alert angezeigt wurde
}

document.addEventListener('DOMContentLoaded', function() {
    let personCount = 0;
    const addPersonButton = document.getElementById('addPerson');
    const additionalPeopleContainer = document.getElementById('additionalPeople');
    const form = document.getElementById('dynamicForm');
  
    if (addPersonButton && additionalPeopleContainer) {
        addPersonButton.addEventListener('click', function() {
            personCount++;
            const newPerson = document.createElement('div');
            newPerson.className = 'formcont2';
            newPerson.innerHTML = `
                <h2>Zusätzliche Person ${personCount}</h2>
                <label class="bold" for="name${personCount}">Vorname / Name</label>
                <input class="marginbot15px" type="text" name="offerteName[]" id="name${personCount}" placeholder="Vorname / Name"  required>
                
                <label class="bold" for="birthdate${personCount}">Geburtsdatum</label>
                <input class="marginbot15px" type="date" name="offerteGebDatum[]" id="birthdate${personCount}" required>
                
                <label class="bold" for="insurance${personCount}">Bei Welcher Krankenkasse bist du aktuell Versichert?</label>
                <select class="marginbot15px" id="insurance${personCount}" name="offerteKK[]" required>
                    <option value="" disabled selected>Bitte wähle eine Krankenkasse aus</option>
                    <option value="Agrisano">Agrisano</option>
                    <option value="AMB">AMB</option>
                    <option value="Aquilana">Aquilana</option>
                    <option value="Assura">Assura</option>
                    <option value="Atupri">Atupri</option>
                    <option value="Avenir">Avenir</option>
                    <option value="Birchmeier">Birchmeier</option>
                    <option value="Concordia">Concordia</option>
                    <option value="CSS">CSS</option>
                    <option value="d'Entremont">d'Entremont</option>
                    <option value="Easysana">Easysana</option>
                    <option value="EGK">EGK</option>
                    <option value="Einsideln">Einsideln</option>
                    <option value="Galenos">Galenos</option>
                    <option value="Glarner">Glarner</option>
                    <option value="Helsana">Helsana</option>
                    <option value="KluG">KluG</option>
                    <option value="KPT">KPT</option>
                    <option value="KKLH">KKLH</option>
                    <option value="Masauns">Masauns</option>
                    <option value="Mutuel">Mutuel</option>
                    <option value="ÖKK">ÖKK</option>
                    <option value="Philos">Philos</option>
                    <option value="Rhenusana">Rhenusana</option>
                    <option value="Sana24">Sana24</option>
                    <option value="Salavals">Salavals</option>
                    <option value="Sanitas">Sanitas</option>
                    <option value="SLKK">SLKK</option>
                    <option value="Sodalis">Sodalis</option>
                    <option value="Steffisburg">Steffisburg</option>
                    <option value="Sumiswalder">Sumiswalder</option>
                    <option value="SUPRA">SUPRA</option>
                    <option value="SWICA">SWICA</option>
                    <option value="Sympany">Sympany</option>
                    <option value="Visana">Visana</option>
                    <option value="Visperterminen">Visperterminen</option>
                    <option value="Vita Surselva">Vita Surselva</option>
                    <option value="Vivacare">Vivacare</option>
                    <option value="Wäderswil">Wäderswil</option>
                </select>
                
                <label class="bold" for="topic${personCount}">Welches Thema beschreibt deine Anfrage am besten?</label>
                <select class="marginbot15px" id="topic${personCount}" name="offerteThemaBeratung[]" required>
                    <option value="Günstige Prämie">Günstige Prämie</option>
                    <option value="bestes Preis-/Leistungsverhältnis">bestes Preis-/Leistungsverhältnis</option>
                    <option value="Bestes Leistungspaket">Bestes Leistungspaket</option>
                    <option value="Grundversicherung">Grundversicherung</option>
                    <option value="Zusatzversicherung">Zusatzversicherung</option>
                    <option value="Zusatzversicherung abgelehnt">Zusatzversicherung abgelehnt, was nun?</option>
                    <option value="Zahnspange und keine Versicherung">Zahnspange und keine Versicherung, was nun?</option>
                    <option value="Zahnversicherung">Zahnversicherung</option>
                    <option value="Dentalhygiene">Dentalhygiene</option>
                    <option value="Alternativmedizin">Alternativmedizin</option>
                    <option value="Massagen">Massagen</option>
                    <option value="Sport">Sport</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Auslandversicheurng">Auslandversicherung</option>
                    <option value="Familienrabatte">Familienrabatte</option>
                    <option value="Mutterschaft">Mutterschaft</option>
                    <option value="Schwangerschaft">Schwangerschaft</option>
                    <option value="Baby">Baby</option>
                    <option value="vorgeburtliche Anmeldung">vorgeburtliche Anmeldung</option>
                    <option value="Neu in der Schweiz">Neu in der Schweiz</option>
                    <option value="Umzug in die Schweiz">Umzug in die Schweiz</option>
                </select>
                
                <p class="marginbot10px">Arbeitest du mehr als 8 Stunden beim gleichen Arbeitgeber?</p>
                <div class="radio-cont abstandkleiner">
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="8harbeit[]" value="8harbeitja" id="8harbeittrue${personCount}"/>
                            <span>Ja</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="8harbeit[]" value="8harbeitnein" id="8harbeitfalse${personCount}"/>
                            <span>Nein</span>
                        </label>
                    </div>
                </div>
            `;
            additionalPeopleContainer.appendChild(newPerson);
        });
    } else {
        console.error('Erforderliche Elemente nicht gefunden. Überprüfen Sie Ihre HTML-Struktur.');
    }
  
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    const offerteForm = document.getElementById('offerte-form1');
    
    if (offerteForm) {
        offerteForm.addEventListener('submit', function(e) {
            // e.preventDefault(); // Dies verhindert das Standardverhalten

            // Formulardaten holen (optional) und in der Konsole anzeigen
            const formData = new FormData(this);
            console.log('Offerte Form data:', Object.fromEntries(formData.entries()));

            // Formular wird nun auf die Standardweise gesendet, die POST-Methode wird verwendet
            // Kein `this.submit()` notwendig, weil wir das Standardverhalten nicht blockieren
        });
    } else {
        console.error('Das Formular mit der ID "offerte-form1" wurde nicht gefunden.');
    }
});