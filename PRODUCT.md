# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias primarias, confirmadas por el autor en partes iguales:

- **Reclutadores y equipos de contratación** que evalúan a Diego Segovia como desarrollador Full Stack. Llegan desde LinkedIn, correo o una aplicación enviada, normalmente con poco tiempo, y necesitan comprobar perfil, seniority y trabajo real.
- **Clientes o empresas** que buscan a alguien para construir o mantener producto web y móvil, y quieren ver resultados previos antes de contactar.

Audiencia secundaria: revisores de App Store / Google Play y usuarios finales de las aplicaciones propias, que aterrizan en las páginas legales alojadas en el mismo sitio.

## Product Purpose

Portafolio profesional personal de Diego Segovia, más la superficie legal y de soporte de sus propias aplicaciones (Orvian y Rimind). Existe para convertir interés en conversaciones concretas: entrevistas u ofertas laborales, consultas de clientes y cumplimiento de las políticas de las tiendas de aplicaciones.

El autor confirmó que el éxito del sitio combina los tres papeles, sin jerarquía entre ellos: presentación profesional, captación de clientes y base legal de las apps.

## Positioning

El propio sitio es la prueba: los proyectos públicos se obtienen en vivo desde GitHub (solo repos marcados con el topic `official`), el trabajo privado se documenta localmente sin exponer repositorios, y el mismo desarrollador publica aquí las políticas de privacidad y el borrado de cuenta de las apps que lanza. Un portafolio vecino podría imitar la estructura, pero no el historial de repos, los enlaces vivos ni las apps publicadas.

## Operating Context

- Sitio en español, de una sola persona, con identidad profesional consistente entre portafolio, CV y páginas legales.
- Recorrido principal: hero → acerca de mí → habilidades → proyectos → proyecto individual con README renderizado → contacto o descarga de CV.
- El CV se entrega como PDF ATS (`/cv/ATS_Diego_Segovia_CV_Full_Stack.pdf`) desde el encabezado, tanto en escritorio como en el menú móvil.
- El trabajo privado se documenta con README locales: sitio de Edynova (unión de dos colegios de formación online) y CRM interno para Importadora Alvarado (Ambato, Ecuador), de uso privado.
- Las páginas legales cubren dos apps publicadas: **Orvian** (finanzas personales) y **Rimind** (recordatorios de cumpleaños), incluida la eliminación de cuenta que exigen las tiendas.
- Despliegue en Firebase Hosting, con URL pública `portfolio-77060.web.app` referenciada desde las páginas legales.

## Capabilities and Constraints

- Next.js 16 con App Router, React 19, Tailwind CSS v4, framer-motion y `@phosphor-icons/react`.
- Listado de proyectos: una sola petición a la API de GitHub del usuario `diegoseg15`, filtrada por el topic `official`, con revalidación ISR de una hora y respaldo en datos locales si GitHub responde con error o se agota el límite.
- Detalle de proyecto en `/proyecto/[IdProject]`: los repos privados se resuelven solo desde archivos locales; los públicos consultan GitHub y renderizan el README con `react-markdown`, GFM y emojis.
- Metadatos de sitio: título «Diego Segovia», descripción de portafolio; `lang="es"`.
- Salida estática/ISR y hosting en Firebase (`firebase.json`, `cleanUrls`, `trailingSlash`). El repositorio conserva simultáneamente `pnpm-lock.yaml` y `package-lock.json`; no hay una decisión registrada sobre cuál es la autoridad.
- Rutas legales existentes: `/orvian/privacy-policy`, `/rimind/privacy-policy`, `/rimind/delete-account`.
- Decisiones abiertas: si se adoptará un dominio propio en lugar de la URL de Firebase; si habrá versión en inglés; si el contacto seguirá siendo `mailto:` o pasará a un formulario.

## Brand Commitments

- Nombre público: **Diego Segovia**. Voz en primera persona, español neutro, profesional y directa; sin jerga de marketing.
- Credenciales que el sitio afirma y debe mantener coherentes: Ingeniero en Sistemas de Información, Máster en Tecnologías Web, Computación en la Nube y Aplicaciones Móviles por la Universidad de Valencia (España), más de cinco años de experiencia.
- Canales vinculantes: `linkedin.com/in/diegoseg15`, `github.com/diegoseg15`, `diegofersv15@hotmail.com` en el sitio y `diegofersv@gmail.com` como contacto de privacidad en las páginas legales.
- Nombres de producto propios: Orvian y Rimind. No se renombran ni se presentan como productos de terceros.
- El sitio se identifica también como músico y con criterio de UI/UX aplicado en el hero; son rasgos de identidad declarados por el autor.

## Evidence on Hand

- Dos casos privados documentados con captura y README: `public/readme/edynova-sitioweb.md` (con `public/images/projects/Responsive-Edynova.png`) y `public/readme/crm-iav.md` (con `public/images/projects/crm-iav-screenshot.png`).
- Repositorios públicos reales en GitHub bajo el topic `official`, con enlace y README verificables.
- Aplicaciones propias publicadas con páginas legales en el sitio (Orvian, Rimind) y correo de soporte real.
- CV vigente en PDF ATS dentro de `public/cv/`.

Ausencias que el trabajo futuro no debe rellenar con invención: no hay testimonios, logotipos de clientes, métricas de negocio, resultados cuantificados ni reseñas. Tampoco hay clientes nombrados más allá de Edynova e Importadora Alvarado.

## Product Principles

1. **La evidencia sustituye a las afirmaciones.** Cada capacidad declarada debe poder rastrearse a un repositorio, una captura, un README o una app publicada.
2. **Una identidad, tres trabajos.** Reclutamiento, clientes y cumplimiento legal comparten el mismo perfil veraz; ninguna superficie contradice a otra.
3. **El trabajo privado se muestra, no se filtra.** Se documenta el resultado y el stack, nunca el código del cliente ni datos internos.
4. **Rápido y barato de mantener.** Contenido estático o ISR, una sola fuente de proyectos y degradación elegante cuando GitHub falla.
5. **Claridad para quien decide en minutos.** Un reclutador o cliente debe entender perfil, prueba y siguiente paso sin explorar.
