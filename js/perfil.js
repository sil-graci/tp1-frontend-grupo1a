// ==========================================================================
// Función de Tema Claro / Oscuro (Persistente con localStorage)
// ==========================================================================
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("devstudio-theme") || "light";

  // Aplica el tema guardado al cargar
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeBtn) {
    themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("devstudio-theme", newTheme);
      themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
    });
  }
}

// ==========================================================================
// Interacciones Dinámicas Centralizadas para los Perfiles
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar modo oscuro/claro
  initThemeToggle();
  const actionBtn = document.querySelector(".btn-perfil-action");
  const output = document.querySelector(".perfil-output");

  if (actionBtn && output) {
    const member = actionBtn.getAttribute("data-member");

    actionBtn.addEventListener("click", () => {
      switch (member) {
        case "adriana":
          output.textContent = "Lo que diseñamos no nos pertenece: nace con nosotros pero crece cuando lo dejamos avanzar.";
          break;
        case "elias":
          output.textContent = "Un buen código no es el que hace magia; es el que no necesita trucos para que otros lo entiendan.";
          break;
        case "judith":
          output.textContent = "-Si la vida te da la espalda, ponle position: absolute y que se arregle sola.-";
          break;
        case "magali":
          output.textContent = "Subir una montaña es una forma de sentirse en la cima del mundo y, al mismo tiempo, aprender a mirar las cosas con calma.";
          break;
        case "silvia":
          output.textContent = "La vida es como el código: a veces no funciona a la primera, pero siempre se puede intentar de nuevo.";
          break;
        default:
          output.textContent = "xx.";
      }
    });
  }
});