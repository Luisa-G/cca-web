document.querySelector('.nav-link.dropdown-toggle').addEventListener('click', function(e) {
  if (!this.parentElement.classList.contains('show')) {
      e.preventDefault(); // Evita la redirección si el dropdown no está visible
      this.parentElement.classList.toggle('show'); // Muestra/oculta el dropdown
      this.nextElementSibling.classList.toggle('show'); // Cambia el menú desplegable
  }
});