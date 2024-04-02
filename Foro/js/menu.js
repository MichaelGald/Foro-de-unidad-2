function mostrarContenido(idContenido) {
    var contenidos = document.querySelectorAll('.contenido'); // Oculta el contenido
    contenidos.forEach(function(contenido) {
        contenido.classList.add('oculto');
    });
    var contenidoMostrar = document.getElementById(idContenido);// Muestra el contenido
    contenidoMostrar.classList.remove('oculto');
}