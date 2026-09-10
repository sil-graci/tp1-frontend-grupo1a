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

// ===========================================================================
// Resalta el enlace de navegación de la sección actualmente visible
// ===========================================================================
function initActiveNavigation() {
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sectionLinks = navLinks
    .map((link) => {
      const hash = new URL(link.href, window.location.href).hash;
      const sectionId = hash ? hash.slice(1) : link.getAttribute("href") === "index.html" ? "inicio" : null;

      return sectionId ? { link, section: document.getElementById(sectionId) } : null;
    })
    .filter((item) => item && item.section);

  if (!sectionLinks.length) return;

  const setActiveLink = () => {
    const referencePoint = window.scrollY + window.innerHeight * 0.35;
    let current = sectionLinks[0];

    sectionLinks.forEach((item) => {
      if (item.section.offsetTop <= referencePoint) current = item;
    });

    navLinks.forEach((link) => {
      const isActive = link === current.link;
      link.classList.toggle("active", isActive);
      link.toggleAttribute("aria-current", isActive);
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  window.addEventListener("resize", setActiveLink);
  setActiveLink();
}

// ==========================================================================
// Interacción Dinámica de la Portada
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar modo oscuro/claro
  initThemeToggle();
  initActiveNavigation();

  const factBtn = document.getElementById("btn-team-fact");
  const factOutput = document.getElementById("team-fact-output");

  const teamFacts = [
    "Creamos páginas web para negocios, emprendimientos y profesionales.",
    "Diseñamos experiencias digitales simples, atractivas y fáciles de usar.",
    "Transformamos ideas en sitios web funcionales y adaptables a cualquier pantalla.",
    "Trabajamos con diseño UX/UI, desarrollo frontend y análisis de necesidades.",
    "Nuestro objetivo es que cada cliente tenga una presencia digital que represente su marca."
    /*"💡 El equipo combina experiencia en UX/UI, análisis de datos y maquetación web moderna.",
    "🚀 La estructura está optimizada para 400px, 900px y 1200px sin desbordes laterales.",
    "🎯 La navegación interna es 100% circular e intuitiva sin depender del historial del navegador.",
    "⚡ Usamos CSS Grid y Flexbox combinados con variables nativas en :root.",
    "🛠️ La lógica JavaScript está modularizada y centralizada en dos archivos sin duplicación."*/
  ];

  if (factBtn && factOutput) {
    factBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * teamFacts.length);
      factOutput.textContent = teamFacts[randomIndex];
    });
  }
});
