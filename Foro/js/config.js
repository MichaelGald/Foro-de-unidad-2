document.addEventListener("DOMContentLoaded", function() {
  const languageSelect = document.getElementById("language");
  const themeSelect = document.getElementById("theme");
  const fontSelect = document.getElementById("font");
  const saveBtn = document.getElementById("saveBtn");
  const container = document.querySelector(".container");
  const previewText = document.getElementById("textoContenido");
  const body = document.body;
  const texto1 = 'El Día Internacional del Libro es una conmemoración celebrada cada 23 de abril a nivel mundial con el objetivo de fomentar la lectura, la industria editorial y la protección de la propiedad intelectual por medio del derecho de autor. Desde 1988, es una celebración internacional promovida por la UNESCO';
  const texto2 = 'International Book Day is a commemoration celebrated every April 23 worldwide with the aim of promoting reading, the publishing industry and the protection of intellectual property through copyright. Since 1988, it is an international celebration promoted by UNESCO';
  loadPreferences();// Cargar preferencias almacenadas
  saveBtn.addEventListener("click", function() {
      savePreferences();
  });

  function loadPreferences() {
      const language = localStorage.getItem("language");
      const theme = localStorage.getItem("theme");
      const font = localStorage.getItem("font");
      if (language) {
          languageSelect.value = language;
      }
      if (theme) {
          themeSelect.value = theme;
          applyTheme(theme);
      }
      if (font) {
          fontSelect.value = font;
          applyFont(font);
      }
      updatePreview(language, theme);
  }

  function savePreferences() { // Función para guardar preferencias
      const selectedLanguage = languageSelect.value;
      const selectedTheme = themeSelect.value;
      const selectedFont = fontSelect.value;

      localStorage.setItem("language", selectedLanguage);
      localStorage.setItem("theme", selectedTheme);
      localStorage.setItem("font", selectedFont);

      applyTheme(selectedTheme);
      applyFont(selectedFont);
      updatePreview(selectedLanguage, selectedTheme);
      
      alert("Preferencias guardadas correctamente.");
  }
 
  function applyTheme(theme) { // Función para aplicar el tema seleccionado
      if (theme === "dark") {
          body.classList.add("dark-theme");
          container.style.borderColor = "#ffffff"; 
      } else {
          body.classList.remove("dark-theme");
          container.style.borderColor = ""; 
      }
  }
  
  function applyFont(font) {// Función para aplicar el tipo de letra seleccionado
      body.style.fontFamily = font;
  }

  function updatePreview(language, theme) { // Función para actualizar la vista previa del texto
      let previewString = "";

      if (language === "en") {
          previewString = texto2;
      } else if (language === "es") {
          previewString = texto1;
      }

      previewText.textContent = previewString;
  }
});