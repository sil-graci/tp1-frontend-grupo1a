# TP1 · Proyecto Web en Equipo — DevStudio

Trabajo Práctico Grupal 1 de la materia **Desarrollo de Sistemas Web (Front End)** — 2do cuatrimestre 2026, Tecnicatura Superior en Desarrollo de Software (ITFS29).

---

## 🔗 Enlaces del Proyecto

* **URL publicada (Vercel):** `[https://devstudio-tp1.vercel.app/](https://devstudio-tp1.vercel.app/)` *(reemplazar con el enlace final de Vercel)*

* **Repositorio público en GitHub:** `https://github.com/sil-graci/tp1-frontend-grupo1a` *(reemplazar con el enlace grupal definitivo)*


---

## 👥 Integrantes del Equipo

| Nombre y Apellido | Rol / Especialidad | Perfil de GitHub |
| --- | --- | --- |
| **Adriana Meyniel** | Analista Funcional & FrontEnd | [@Adrilu-web](https://www.google.com/search?q=https://github.com/Adrilu-web) |
| **Elías** | Maquetación & Lógica FrontEnd | `[@usuario-elias]` |
| **Judith** | Maquetación & Responsive | `[@usuario-judith]` |
| **Magalí** | Estilos CSS & Animaciones | `[@usuario-magali]` |
| **Silvia** | Desarrollo Web & Lógica JS | `[@usuario-silvia]` |

---

## 📁 Estructura de Archivos y Carpetas

El proyecto respeta la distribución estipulada por la cátedra, manteniendo los documentos `.html` en la raíz y separando los recursos estáticos en sus respectivos directorios:

```text
├── css/
│   └── styles.css              # Hoja de estilos centralizada con temas (claro/oscuro), layout y media queries
├── js/
│   ├── main.js                 # Lógica dinámica de Portada (index.html), Bitácora y función global de tema
│   └── perfil.js               # Lógica dinámica centralizada para perfiles individuales (perfil-*.html)
├── img/                        # Recursos visuales (avatares, pósters de películas y portadas de discos)
├── bitacora.html               # Registro del proceso grupal, decisiones y soluciones técnicas
├── index.html                  # Portada principal con presentación del equipo y grilla de integrantes
├── perfil-adriana.html         # Perfil individual: Adriana Meyniel
├── perfil-elias.html           # Perfil individual: Elías
├── perfil-judith.html          # Perfil individual: Judith
├── perfil-magali.html          # Perfil individual: Magalí
├── perfil-silvia.html          # Perfil individual: Silvia
└── README.md                   # Documentación técnica obligatoria y declaración de uso de IA

```

---

## 🎨 Guía de Estilos y Decisiones de Diseño

### 1. Paleta de Colores y Modo Claro / Oscuro

El sitio cuenta con un sistema dinámico de temas mediante variables nativas en CSS (`:root` y `[data-theme="dark"]`), permitiendo alternar entre modo claro vibrante y modo oscuro profundo con persistencia en `localStorage`.

* **Modo Claro (Vibrante):**
* **Fondo Principal (`--bg-main`):** `#e2e8f0` (Gris pizarra claro de soporte).
* **Fondo de Tarjetas (`--bg-card`):** `#ffffff` (Blanco puro con sombras definidas).
* **Hero Section** Tratamiento con `linear-gradient` translúcido sobre `hero-bg.png` para atenuar la intensidad del fondo
* **Texto Principal (`--text-main`):** `#0f172a` (Azul noche de alto contraste).
* **Color de Acento (`--accent`):** `#2563eb` (Azul eléctrico).
* **Color de Badges (`--badge-color`):** `#4338ca`.


* **Modo Oscuro (High Contrast Dark):**
* **Fondo Principal (`--bg-main`):** `#090d16` (Fondo oscuro profundo).
* **Fondo de Tarjetas (`--bg-card`):** `#131b2e` (Azul noche para tarjetas).
* **Hero Section** Imagen pura de fondo (`hero-bg.png`) con viñetado radial sutil para garantizar contraste máximo y brillo en las líneas de circuitos.
* **Texto Principal (`--text-main`):** `#f8fafc` (Blanco nítido).
* **Color de Acento (`--accent`):** `#38bdf8` (Celeste brillante de alto contraste).
* **Color de Badges (`--badge-color`):** `#38bdf8`.



### 2. Tipografías (Google Fonts)

* **Títulos y Display:** `Space Grotesk` (pesos `600` y `700`) — Tipografía moderna, geométrica y con fuerte presencia visual.
* **Cuerpo y Lectura:** `IBM Plex Sans` (pesos `400`, `500` y `600`) — Tipografía sans-serif diseñada para máxima legibilidad en párrafos, etiquetas y tarjetas.

### 3. Maquetación y Responsive Design

* **Flexbox y CSS Grid:** Se utilizó CSS Grid para la grilla de integrantes de la portada (`.team-grid`), el layout principal de los perfiles (`.profile-layout`), para el formulario interactivo de contacto y mapa/canales directos (`.contact-grid`) y  y el catálogo de tarjetas multimedia (`.media-grid`). Flexbox se implementó en cabeceras, botones, listas de etiquetas y paginación.

### 4. Breakpoints obligatorios verificados

* **1200px:** Contención fluida del contenedor principal (`.container` max-width 95%).
* **900px:** Colapso a 1 columna en la vista de perfil y en la sección de Contacto (`.contact-grid`), y reordenamiento en 2 columnas para integrantes y tarjetas multimedia.
* **400px:** Adaptación a móviles compactos: navegación en bloque vertical con envoltura fluida (`flex-wrap`), tarjetas y formulario en 1 columna sin desbordes laterales.


---

## 🎬 Tarjetas Multimedia de Películas y Discos

En los perfiles individuales, las listas de películas y discos se transformaron en **tarjetas multimedia interactivas (`.media-card`)**:

* Cada tarjeta contiene una imagen optimizada (póster o portada de álbum con `object-fit: cover`)
* Al presionar la tarjeta, el usuario es redirigido en una pestaña nueva (`target="_blank"`) a la ficha de IMDb, Spotify, YouTube o sitio oficial correspondiente.
* Incorpora microinteracciones de elevación (`transform: translateY(-5px)`) y zoom suave en la portada (`scale(1.06)`) mediante transiciones CSS.

---

## 📩 Sección de Contacto y Canales de Comunicación

La portada incorpora un módulo de contacto estructurado en dos columnas (`.contact-grid`):

* **Formulario Accesible:** Campos semánticos validados (`<input>`, `<textarea>`) con estados de foco (`:focus`) adaptados a los colores de acento y tipografía del sistema.
* **Geolocalización:** Integración de mapa interactivo embebido mediante OpenStreetMap (`<iframe>` con carga diferida `loading="lazy"`).
* **Canal Directo:** Botón de acción con enlace a WhatsApp optimizado mediante icono SVG en línea y microinteracción visual al cursor (`hover`).

---

## ⚙️ Interactividad y Lógica JavaScript

### 1. Control de Tema Global (`initThemeToggle`)

* **Implementación:** Función compartida en `js/main.js` y `js/perfil.js`.
* **Funcionamiento:** Lee y escribe la preferencia del usuario en `localStorage` bajo la clave `devstudio-theme`. Al hacer clic en el botón `#theme-toggle` (disponible en `index.html`, `bitacora.html` y los 5 perfiles), alterna el atributo `data-theme` en la etiqueta `<html>` y actualiza el icono visible (`☀️` / `🌙`).

### 2. Portada (`js/main.js`)

* **Función:** Generador dinámico de datos y fortalezas del equipo.
* **Técnica:** Escucha el evento `click` sobre `#btn-team-fact` y obtiene un dato aleatorio de un array mediante `Math.random()`, actualizando el elemento `#team-fact-output` en tiempo real.

### 3. Perfiles Individuales (`js/perfil.js`)

* **Arquitectura:** Se implementó un único script universal para todos los perfiles (`perfil-*.html`) utilizando el atributo `data-member`.


---

## 🧭 Navegación y Usabilidad

* **Flujo Circular:** Cada página incluye una barra de navegación superior fija (`.site-header`) que permite regresar al Inicio o ir a la Bitácora desde cualquier ubicación.

* **Margen izquierdo:** Logo SVG y nombre del equipo enlazados a la raíz.

* **Margen derecho:** Enlaces directos a:
  * **Inicio:** Conduce a la sección superior de la portada (`#inicio`).
  * **Equipo:** Conduce ancladamente a la grilla de integrantes (`index.html#equipo`).
  * **Contacto:** Conduce directamente a la sección de formulario y mapa (`index.html#contacto`) con compensación de altura fija (`scroll-margin-top: 90px`).
  * **Bitácora:** Conduce al registro de desarrollo (`bitacora.html`).
  * **Interruptor de Modo:** Alterna entre claro y oscuro.

* **Paginación Interna:** En el pie de cada perfil se integraron botones secuenciales (`← Anterior` / `Siguiente →`) para navegar entre compañeros sin depender del botón "Atrás" del navegador.



---

## 🤖 Declaración de Uso de IA y Autoría

* **Herramientas utilizadas:**

    * **Gemini (Google):** Versión Pro / Advanced. **Plan:** Pago (Google One AI Premium / suscripción por estudiante).


* **Experiencia previa del equipo:**
* El equipo contaba con experiencia intermedia en prompts orientados a maquetación web, depuración de selectores CSS y lógica de eventos en JavaScript.


* **Uso específico de la IA:**
* Se utilizó la IA para la estructura modular base del HTML/CSS, el diseño del sistema de variables para el cambio de modo claro/oscuro y la centralización de scripts mediante `data-attributes` en `perfil.js`.


* **Criterio de prompts y privacidad:**
* Se priorizaron prompts enfocados en código semántico nativo, accesibilidad (ARIA) y rendimiento sin frameworks pesados. Las imágenes de películas y discos fueron enlazadas con textos alternativos (`alt`) claros.


* **Qué revisó y adaptó el equipo con criterio propio:**
* Ajuste de contrastes y paleta de colores en ambos modos para cumplir con estándares de accesibilidad WCAG.
* Reestructuración del encabezado para separar marca a la izquierda y enlaces a la derecha.
* Se verificó la adaptabilidad en los 3 breakpoints requeridos (400px, 900px y 1200px).


* Carga manual y validación de los datos reales de los 5 integrantes (habilidades, películas y discos).

* Se documentaron los desafíos grupales en `bitacora.html`.





---

## 🚀 Evolución y Próximos Pasos (TP2)

* Carga asíncrona de datos e integrantes mediante consumo de archivos JSON externos y API `fetch`.
* Incorporación de filtros por categorías o géneros en las tarjetas de películas y discos.
* Validaciones avanzadas del lado del cliente en formularios de contacto dinámicos.