function showForm(formId) {
  // Bereich "anfangscont" ausblenden
  document.getElementById('anfangscont').style.display = 'none';

  // Alle Formulare sammeln
  const forms = document.querySelectorAll('#form1, #form2');

  forms.forEach(form => {
      if (form.id === formId) {
          form.classList.add('active'); // Formular einblenden
      } else {
          form.classList.remove('active'); // Anderes Formular ausblenden
      }
  });
}

let personCount = 1;

function addPersonForm() {
  // Erhöhe die Zählung für eindeutige IDs und Namen
  personCount++;

  // Erstelle das HTML für das neue Formular
  const formHTML = `
      <div id="personhinzufügen${personCount}" class="weiterePerson">
          <h2><u>Weitere Person ${personCount}</u></h2>
          <fieldset class="fieldset">
              <div class="inputcont">
                  <label for="nameOfferte${personCount}">Name / Vorname</label>
                  <input id="nameOfferte${personCount}" name="nameOfferte[]" type="text">
              </div>
              <div class="inputcont">
                  <label for="gebDateOfferte${personCount}">Geburtsdatum</label>
                  <input id="gebDateOfferte${personCount}" name="gebDateOfferte[]" type="date">
              </div>
          </fieldset>
          <div class="divider"></div>
          <fieldset>
              <div class="inputcont">
                  <label for="aktuelleKKOfferte${personCount}">Bei welcher Krankenkasse bist du aktuell versichert?</label>
                  <select id="aktuelleKKOfferte${personCount}" name="aktuelleKKOfferte[]">
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
              </div>
          </fieldset>
          <div class="divider"></div>
          <fieldset>
              <div class="inputcont">
                  <label for="themaOfferte${personCount}">Welches Thema beschreibt deine Anfrage am besten?</label>
                  <select id="themaOfferte${personCount}" name="themaOfferte[]">
                      <option value="" disabled selected>Bitte wähle ein Thema aus</option>
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
                      <option value="Auslandversicheurng">Auslandversicheurng</option>
                      <option value="Familienrabatte">Familienrabatte</option>
                      <option value="Mutterschaft">Mutterschaft</option>
                      <option value="Schwangerschaft">Schwangerschaft</option>
                      <option value="Baby">Baby</option>
                      <option value="vorgeburtliche Anmeldung">vorgeburtliche Anmeldung</option>
                      <option value="Neu in der Schweiz">Neu in der Schweiz</option>
                      <option value="Umzug in die Schweiz">Umzug in die Schweiz</option>
                  </select>
              </div>
          </fieldset>
          <div class="divider"></div>
          <fieldset class="radiofieldset">
              <legend>Arbeitest du mehr als 8 Stunden</legend>
              <div class="radiocont">
                  <input id="8StdArbeitJa${personCount}" name="8StdArbeit${personCount}" type="radio" value="Ja">
                  <label for="8StdArbeitJa${personCount}">Ja</label>
              </div>
              <div class="radiocont">
                  <input id="8StdArbeitNein${personCount}" name="8StdArbeit${personCount}" type="radio" value="Nein">
                  <label for="8StdArbeitNein${personCount}">Nein</label>
              </div>
          </fieldset>
      </div>
  `;

  // Füge das neue Formular-HTML in den Container ein
  const formContainer = document.getElementById("personhinzufügen");
  formContainer.insertAdjacentHTML('beforeend', formHTML);
}

 // Diese Funktion schaltet das Select-Feld um
 function toggleSelectAndReset(checkboxId, selectId) {
    var checkbox = document.getElementById(checkboxId);
    var select = document.getElementById(selectId);

    if (checkbox.checked) {
        // Setzt das Select-Feld auf den Standardwert zurück
        select.value = ""; // Setze dies auf den Wert der vordefinierten Auswahl, z.B. ""
    }
    // Deaktiviert oder aktiviert das Select-Feld basierend auf dem Zustand der Checkbox
    select.disabled = checkbox.checked;
}



// Registriere das Event für das Formular
document.getElementById('offerteForm').addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    // Alle Formularfelder abrufen
    const form = document.getElementById('offerteForm');
    const formData = new FormData(form);

    // Durch die Felder iterieren und Werte in der Konsole ausgeben
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    console.log("Alle Formularfelder wurden in der Konsole angezeigt.");
} 