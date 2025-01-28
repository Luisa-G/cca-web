document.querySelector('.nav-link.dropdown-toggle').addEventListener('click', function(e) {
  if (!this.parentElement.classList.contains('show')) {
      e.preventDefault(); // Evita la redirección si el dropdown no está visible
      this.parentElement.classList.toggle('show'); // Muestra/oculta el dropdown
      this.nextElementSibling.classList.toggle('show'); // Cambia el menú desplegable
  }
});



//para el acordión
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            // Si ya está abierto, colapsa el panel
            panel.style.maxHeight = null;
        } else {
            // Ajusta la altura máxima al tamaño del contenido del panel
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


