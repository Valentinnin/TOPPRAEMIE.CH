

document.getElementById('start-animation').addEventListener('click', function() {
  document.querySelector('header').classList.add('animate');
  document.getElementById('logo').classList.add('animate');
  document.getElementById('anim-text').classList.add('animate');
  document.querySelector('nav').classList.add('animate');
  document.querySelector('main').classList.add('animate');
  document.querySelector('footer').classList.add('animate');
  this.classList.add('fade-out');
});

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

