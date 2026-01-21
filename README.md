# 🚀 Portafolio Personal — Diego Segovia

✨ **Bienvenido a mi portafolio profesional**

Este proyecto es un **portafolio web desarrollado con Next.js**, enfocado en mostrar de forma clara, moderna y eficiente mis proyectos, habilidades y experiencia como desarrollador Full Stack.

El sitio integra datos dinámicos desde **GitHub**, combina proyectos públicos y privados, y prioriza **performance, UX y escalabilidad**.

---

## 🧠 Tecnologías Utilizadas

### Frontend

* **Next.js** (App Router)
* **React**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **HTML5 / CSS3**

### Integraciones

* **GitHub API** (repositorios públicos)
* **GitHub OpenGraph** (imágenes de proyectos)
* **Markdown (README rendering)**

### Diseño & UX

* **Figma** (diseño UI/UX)
* Diseño responsive
* Animaciones sutiles y navegación fluida

---

## 🗂️ Arquitectura del Proyecto

* **Proyectos públicos**
  Se obtienen dinámicamente desde GitHub usando la API, filtrados por topics (`official`).

* **Proyectos privados**
  Se gestionan de forma local, con README almacenados en `/public`, sin exponer repositorios privados ni consumir la API.

* **Optimización de peticiones**

  * El listado principal hace **una sola petición**
  * El README se carga **solo al entrar al proyecto**
  * Se evita el rate limit de GitHub

---

## 💼 Secciones del Portafolio

* **Inicio**
  Presentación general y navegación principal.

* **Acerca de mí**
  Perfil profesional y enfoque como desarrollador.

* **Habilidades**
  Tecnologías, frameworks y herramientas dominadas.

* **Proyectos**

  * Proyectos públicos (GitHub)
  * Proyectos privados (locales)
  * Vista detallada con README renderizado

* **Contacto**
  Enlaces para conectar y colaborar.

---

## 📦 Instalación y Configuración

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

Accede al proyecto:

```bash
cd tu-repositorio
```

Instala dependencias:

```bash
npm install
# o
yarn install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
# o
yarn dev
```

El proyecto estará disponible en:

```
http://localhost:3000
```

---

## 🌐 Demo

🔗 **Ver Portafolio en línea**
*(Agrega aquí la URL de producción cuando esté desplegado)*

---

## 📬 Contacto

* [Correo electrónico](mailto:diegofersv15@hotmail.com)
* **LinkedIn / GitHub:** disponibles en el portafolio

---

## 📜 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**.
Consulta el archivo `LICENSE` para más información.

---

## ✨ Notas Finales

Este portafolio fue construido con el objetivo de:

* Mostrar proyectos reales
* Aplicar buenas prácticas de frontend moderno
* Optimizar rendimiento y experiencia de usuario
* Mantener una arquitectura clara y escalable

Gracias por visitarlo 🚀
Siéntete libre de explorar, revisar los proyectos y conectar.
