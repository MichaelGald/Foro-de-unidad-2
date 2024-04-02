document.addEventListener("DOMContentLoaded", function() {
    var textoContenido = document.getElementById("textoContenido");// Obtener el elemento donde se mostrará el texto
    var texto1 = 'El Día Internacional del Libro es una conmemoración celebrada cada 23 de abril a nivel mundial con el objetivo de fomentar la lectura, la industria editorial y la protección de la propiedad intelectual por medio del derecho de autor. Desde 1988, es una celebración internacional promovida por la UNESCO';
    var texto2 = 'International Book Day is a commemoration celebrated every April 23 worldwide with the aim of promoting reading, the publishing industry and the protection of intellectual property through copyright. Since 1988, it is an international celebration promoted by UNESCO';
    var languageSelect = document.getElementById("language");
    var selectedLanguage = languageSelect.value;
    if (selectedLanguage === "en") {
        textoContenido.textContent = texto2;
    } else if (selectedLanguage === "es") {
        textoContenido.textContent = texto1;
    }
    languageSelect.addEventListener("change", function() { // Añadir evento change al select de idioma para actualizar el texto cuando cambie la selección
        selectedLanguage = languageSelect.value;
        if (selectedLanguage === "en") {
            textoContenido.textContent = texto2;
        } else if (selectedLanguage === "es") {
            textoContenido.textContent = texto1;
        }
    });
});
