# Design

<!-- impeccable:design-schema 1 -->

## Art Direction

El portafolio se concibe bajo el concepto **Premium Interactive Creative Developer Portfolio**, una experiencia editorial que fusiona la precisión técnica de la ingeniería de software con una dirección de arte de autor. El sitio es la prueba: tipografía expresiva, composición con espacio negativo, y movimiento intencionado que respeta las preferencias del usuario.

- **Modo de diseño (Impeccable):** Experience — el artefacto (el trabajo del desarrollador) lidera desde el primer viewport; la interfaz se retira.
- **Identidad visual:** Azul profundo elegante como identidad principal. Dark no es negro absoluto; es un azul marino profundo (#0b1f3a) que protege el contraste y la visibilidad de imágenes y proyectos. Light es claro pero con azul oscuro en contenido y navegación importante.
- **Estética general:** Minimalismo expresivo con acentos de azul controlados, sin glassmorphism, sin sombras pesadas, sin partículas, sin bordes genéricos alrededor de cada elemento, sin eyebrow/kicker sobre los encabezados (el encabezado lleva su propio peso).
- **Atmósfera:** Sofisticada, moderna, limpia y altamente responsiva. Alejada de dashboards corporativos o plantillas SaaS.
- **Enfoque visual:** Espacio negativo depurado, tipografía geométrica con carácter, movimiento sutil e intencionado, superficies planas con bordes precisos.

## Color System

Sistema cromático basado en azul profundo como identidad, con semántica equilibrada en ambos temas. Todos los colores son tokens semánticos; nunca hay valores de color sueltos en componentes.

### Dark Mode (Default / Immersive Core)
| Token | Valor | Rol |
|-------|-------|-----|
| `--background` | `#0b1f3a` | Fondo principal (azul marino profundo, nunca negro absoluto) |
| `--card` | `#102a43` | Superficie elevada (navy ligeramente más claro) |
| `--foreground` | `#f8fafc` | Texto principal (casi blanco) |
| `--muted-foreground` | `#94a3b8` | Texto secundario |
| `--primary` | `#2563eb` | Acento principal (azul identidad) |
| `--primary-foreground` | `#ffffff` | Texto sobre acento |
| `--muted` | `#16324f` | Fondo secundario suave |
| `--border` | `#1e4065` | Bordes sutiles |
| `--ring` | `#60a5fa` | Anillo de foco |

### Light Mode (Clean & Refined)
| Token | Valor | Rol |
|-------|-------|-----|
| `--background` | `#f8fafc` | Fondo principal (casi blanco) |
| `--card` | `#ffffff` | Superficie elevada (blanco puro) |
| `--foreground` | `#0b1f3a` | Texto principal (azul marino profundo) |
| `--muted-foreground` | `#475569` | Texto secundario |
| `--primary` | `#2563eb` | Acento principal (azul identidad) |
| `--primary-foreground` | `#ffffff` | Texto sobre acento |
| `--muted` | `#f1f5f9` | Fondo secundario suave |
| `--border` | `#e2e8f0` | Bordes sutiles |
| `--ring` | `#2563eb` | Anillo de foco |

### Temas y persistencia
- **Control del usuario:** Toggle accesible en el header (botón con `aria-label`, `aria-pressed`, estado visual sol/luna).
- **Preferencia del SO:** `prefers-color-scheme` se respeta cuando el usuario no ha guardado una selección explícita.
- **Persistencia:** `localStorage` (`diegoseg:theme`) con script `beforeInteractive` en `<head>` para prevenir flash de tema incorrecto.
- **Tema por defecto:** Dark (inmersivo), coherente con el posicionamiento creativo.

## Typography

- **Font Family (Sans / Interface):** Inter, system-ui, -apple-system, sans-serif.
- **Font Family (Mono / Code & Badges):** JetBrains Mono, Fira Code, monospace.
- **Jerarquía tipográfica:**
  - **Display / Hero:** `clamp(3rem, 2.5rem + 2vw, 4.5rem)` (bold, tracking `-0.03em`, line-height `1.1`).
  - **Section Headings (H2):** `clamp(2rem, 1.8rem + 0.5vw, 2.5rem)` (semi-bold, tracking `-0.02em`).
  - **Subheadings (H3):** `clamp(1.25rem, 1.15rem + 0.25vw, 1.5rem)` (medium to semi-bold).
  - **Body Text:** `1rem` (16px), line-height `1.6`, color `--muted-foreground` para pasajes secundarios, `--foreground` para lectura principal.
  - **Code / Meta:** `0.875rem` (14px), familia mono.
- **Fluid type:** Todas las medidas usan `clamp()` para escalar fluidamente entre breakpoints.
- **No eyebrow/kicker:** Los encabezados llevan su propio peso; no hay etiquetas superiores.

## Motion System

Las animaciones refuerzan la sensación de producto pulido sin comprometer el rendimiento ni la accesibilidad (`prefers-reduced-motion`).

### Tokens de duración
| Token | Valor | Uso |
|-------|-------|-----|
| `fast` | `150ms` | Estados hover, micro-interacciones |
| `normal` | `250ms` | Transiciones de color, elevación estándar |
| `smooth` | `400ms` | Entradas de modal, expansión, scroll-reveal |

### Curvas de easing
| Token | Valor | Uso |
|-------|-------|-----|
| `ease-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrada de elementos, scroll-reveal |
| `ease-spring` | `cubic-bezier(0.4, 0, 0.2, 1)` | Retroalimentación de layout natural |

### Reglas de reduced motion
- Cuando `prefers-reduced-motion: reduce` está activo:
  - `scroll-behavior: auto` (sin scroll suave).
  - Todas las transiciones y animaciones se reducen a `0.01ms`.
  - Los elementos `.reveal` se muestran inmediatamente (opacity 1, sin desplazamiento).
  - El cursor personalizado se desactiva.
  - El desplazamiento entre secciones es instantáneo.

### Scroll-reveal
- Elementos con clase `.reveal` parten con `opacity: 0` y `translateY(1.2rem)`.
- Al entrar en viewport (IntersectionObserver, threshold 0.12, rootMargin -80px), se añade `.revealed` (opacity 1, translateY 0).
- Soporta clases `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` para escalonar apariciones.
- Todo contenido es visible por defecto; el motion es realce, no requisito para ver.

## Responsive Design

- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px) — usados con moderación, basados en contenido no en dispositivos.
- **Hero:** `min-h-[80dvh]` en móvil, `min-h-[100dvh]` en desktop. Editorial de dos columnas en desktop: columna izquierda (7/12) con etiqueta profesional, titular principal «Full Stack Developer.», descripción y CTAs; columna derecha (5/12) con la imagen local `/images/banner-home.jpg` visible, sin overlay de ocultamiento ni fondo difuminado. Móvil: una sola columna en secuencia de lectura (contenido, CTAs, badges, luego imagen), toda información clave visible en el primer viewport sin animación que oculte el titular ni los CTAs.
- **Navegación:** Desktop muestra enlaces horizontales + toggle de tema + CV. Móvil muestra menú lateral con deslizamiento y overlay.
- **Projects:** Diseño editorial de una columna en móvil, dos columnas en desktop (media izquierda + contenido derecha). Navegación anterior/siguiente con flechas. Todo visible por defecto sin depender de JS.
- **Tipografía:** Fluid con `clamp()` en todos los encabezados y body.
- **Toque:** Targets mínimos 44×44 px, espaciado adecuado entre elementos táctiles.
- **Scroll:** Barras de scroll refinadas, ocultas en galerías horizontales cuando corresponde.

## Interacción

### Custom Cursor
- Solo se activa en punteros finos (`pointer: fine`), nunca en dispositivos táctiles (`pointer: coarse`).
- Se desactiva completamente con `prefers-reduced-motion`.
- Elemento de puntero (8px) + anillo exterior (40px) con colores del tema (`--primary`).
- Escala al pasar sobre elementos interactivos (`data-cursor="interactive"`, enlaces, botones).
- `pointer-events: none` para no interferir con clics ni lectores de pantalla.

### Navegación
- Enlaces de ancla con `scrollIntoView({ behavior: "smooth" })` (respetando reduced motion).
- Navegación entre secciones desde cualquier ruta: redirige al home con hash.
- Focus visible mejorado: anillo de 2px con `--ring`, offset de 2px.

### Estados
- Cada componente interactivo contempla: default, hover, focus-visible, active, disabled.
- No se usan `div` clickeables; se usan `<button>` y `<a>` semánticos.

## Accesibilidad (WCAG 2.2 AA)

- HTML semántico: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.
- Contraste de color conforme en ambos temas (≥4.5:1 body, ≥3:1 large text, ≥3:1 controles/focus).
- Focus visible claro y consistente.
- Labels accesibles en todos los controles (`aria-label`, `aria-pressed`, `aria-expanded`).
- Texto alternativo en imágenes.
- Salteo de contenido reducido (una sola página con secciones ancladas).
- SR-only para texto decorativo de estado.

## Estructura de Páginas

- `/` — Hero → About → Skills → Projects → Footer.
- `/proyecto/[slug]` — Detalle editorial de proyecto: hero de proyecto con imagen/recurso existente, título grande, descripción, tecnologías (topics), enlaces a repositorio/sitio y README renderizado; columna secundaria de metadatos sticky en desktop con navegación de retorno a `#projects`. Todo el contenido visible por defecto, sin motion obligatorio.
- `/orvian/privacy-policy`, `/rimind/privacy-policy`, `/rimind/delete-account` — Páginas legales existentes (sin cambios de contenido).
- `/cv/ATS_Diego_Segovia_CV_Full_Stack.pdf` — CV descargable desde header y menú móvil.

## Validación de implementación (bloque de hero y galería de proyectos)

Comprobado en navegador integrado (OpenChamber, servidor `next dev` en `localhost:3000`) tras `next build` exitoso y `eslint` focalizado con 0 errores:

- **Hero editorial:** grid real de dos columnas en desktop 1440×900 (contenido izquierda 7/12, imagen derecha 5/12 con `/images/banner-home.jpg` visible, sin overlay), titular principal «Full Stack Developer.», etiqueta «Diego Segovia», descripción fiel, CTAs (`Ver proyectos` → `#projects`, `Sobre mí` → `#about-me`) y badges (Programador / UI-UX aplicado / Músico). Todo el contenido visible por defecto; eliminado el estado `revealed` que ocultaba el titular hasta un timeout de 100 ms.
- **Móvil y tableta:** 390×844 y 768×1024 en secuencia de columna única, CTAs a ancho completo, sin recortes; imagen local visible sin fondo difuminado.
- **Temas (ambos):** claro y oscuro verificados, toggle bidireccional funcional (`aria-label`, `aria-pressed`, `html.dark`), sin flash de tema incorrecto.
- **Ancla `#projects`:** navegación funcional, galería editorial con 17 proyectos visibles por defecto (sin carrusel), primer ítem con distintivo «Destacado», CTAs y enlaces de proyecto funcionales, fallback «SIN CAPTURA DISPONIBLE» sin imagen.
- **Consola:** sin errores (solo `console.warn` esperado de fallback de GitHub API a datos locales, comportamiento por diseño).
- **Build y lint:** `next build` exitoso (24 rutas estáticas); `eslint` 0 errores.


## Detalle de proyecto (`/proyecto/[slug]`)

- **Composición editorial ancha en desktop:** grid de dos columnas (contenido principal 8/12, metadatos secundarios 4/12 sticky). No es una columna móvil ampliada.
- **Hero de proyecto:** imagen/recurso existente visible (sin overlay de ocultamiento, sin fondo difuminado), etiqueta «Proyecto», título grande (`text-4xl lg:text-5xl`), descripción fiel, tecnologías (topics) y CTAs (repositorio GitHub, sitio en vivo cuando existan).
- **Navegación de retorno:** enlace «Volver a proyectos» con flecha, ancla `#projects`, siempre visible al inicio del contenido principal.
- **Columna secundaria (desktop):** sticky con `top-24`, resumen del proyecto, tecnologías y enlaces de acción. En móvil/tablet se integra al flujo de una sola columna al final.
- **README:** sección «Documentación» con `ReactMarkdown` renderizado (GFM, emojis), componentes tipográficos propios para h1-h3, párrafos, código en línea y bloque, listas, blockquote, enlaces e imágenes. Todo visible por defecto; sin contenido oculto por motion.
- **Fallback sin datos:** cuando no hay repositorio ni README, se muestra mensaje claro sin metadatos, sin romper la estructura.
- **Temas:** fondos navy/light semánticos (`--background`, `--card`, `--border`, etc.), contraste WCAG 2.2 AA en ambos temas, sin glassmorphism ni cards genéricas.

No se modificó el home, tema, header ni el fetching de datos en este bloque.
