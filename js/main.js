

//para el acordeón
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


