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
          output.textContent = `xxx`;
          break;
        case "elias":
          output.textContent = "xxx.";
          break;
        case "judith":
          output.textContent = "-Si la vida te da la espalda, ponle position: absolute y que se arregle sola.-";
          break;
        case "magali":
          output.textContent = "xx";
          break;
        case "silvia":
          output.textContent = "xx";
          break;
        default:
          output.textContent = "xx.";
      }
    });
  }
});