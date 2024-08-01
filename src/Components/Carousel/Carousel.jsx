import { useState } from "react";

export function Carousel() {
  const projects = [
    {
      id: 1,
      title: "Asistente Virtual DORIS - Frontend en React",
      description:
        "Desarrollé una aplicación React para el asistente virtual DORIS, diseñado para la Pontificia Universidad Católica del Ecuador, Sede Ambato (PUCESA). DORIS ofrece información detallada sobre la Escuela de Ingenierías (EI), mejorando la experiencia de los usuarios al interactuar con la universidad.",
      imageUrl:
        "https://github.com/diegoseg15/IA-Tesis-Frontend/raw/main/src/assets/image.png?raw=true",
    },
    {
      id: 2,
      title: "Servidor Backend con IA - Node.js",
      description:
        "Este proyecto consiste en un servidor backend construido con Node.js y Express, diseñado para facilitar la comunicación entre una aplicación frontend en React y las poderosas API de OpenAI. El servidor permite la integración con los modelos GPT y Whisper de OpenAI para generar respuestas inteligentes y procesar audio de manera eficiente. Además, incluye una funcionalidad adicional para controlar motores conectados a un Arduino UNO, lo que permite la creación de aplicaciones interactivas y automatizadas. Esta solución backend no solo mejora la interacción del usuario con la aplicación frontend, sino que también amplía las capacidades del sistema al integrar inteligencia artificial y control de hardware.",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Hogar Santa Marianita - Web V1",
      description:
        "El primer diseño de la página web para el Hogar Santa Marianita, un centro de acogimiento temporal para niños en situación de vulnerabilidad. Creado con React y Tailwind, el sitio proporciona información detallada sobre el hogar y facilita la realización de donaciones.",
      imageUrl:
        "https://github.com/diegoseg15/hogar-santa-marianita-diseno1/raw/main/src/assets/images/Captura-Presentaci%C3%B3n.png?raw=true",
    },
    {
      id: 4,
      title: "Hogar Santa Marianita - Web V2",
      description:
        "La segunda versión de la página web para el Hogar Santa Marianita, mejorando la interfaz y funcionalidad. Desarrollada con React y Tailwind, esta versión proporciona una experiencia de usuario optimizada para obtener información y realizar donaciones.",
      imageUrl:
        "https://github.com/diegoseg15/hogar-santa-marianita-diseno2/raw/main/src/assets/images/Captura-Presentaci%C3%B3n.png?raw=true",
    },
    {
      id: 5,
      title: "BirthdayApp - Aplicación de Recordatorio de Cumpleaños",
      description:
        "BirthdayApp es una aplicación móvil en React Native que facilita el seguimiento de cumpleaños de familiares y amigos. La información se guarda en Firebase, permitiendo actualizaciones y mantenimiento sencillo para gestionar las fechas importantes.",
      imageUrl:
        "https://github.com/diegoseg15/birthdayapp/blob/main/src/assets/logo.png?raw=true",
    },
    {
      id: 6,
      title: "Lector de Tablas de Registro - Aplicación Java",
      description:
        "Una aplicación Java para leer y visualizar tablas de registros almacenadas en archivos de texto. Ofrece una interfaz intuitiva para presentar los datos tabulares de manera clara y accesible, mejorando la comprensión de la información contenida en archivos txt.",
      imageUrl:
        "https://github.com/diegoseg15/lector-txt-java/raw/main/src/assets/Captura%20de%20pantalla%202024-02-25%20185026.png?raw=true",
    },
    {
      id: 7,
      title: "Clon de Netflix - Interfaz React",
      description:
        "Clon de la interfaz de usuario de Netflix, desarrollado con React JS y Tailwind CSS. Este proyecto replica el diseño y la experiencia de la plataforma de streaming, ofreciendo una vista previa de cómo se vería una aplicación de streaming personalizada.",
      imageUrl:
        "https://github.com/diegoseg15/netflix-clone/raw/main/src/assets/screenshot.png?raw=true",
    },
    {
      id: 8,
      title: "Clon de Instagram - Interfaz React",
      description:
        "Clon de la interfaz de Instagram creado con React JS y Tailwind CSS. El proyecto reproduce el diseño y las funcionalidades básicas de la popular plataforma de redes sociales, proporcionando una experiencia visual similar a la original.",
      imageUrl:
        "https://github.com/diegoseg15/instagram-clone/raw/main/public/screenshot-web.jpeg?raw=true",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h3 className="text-center font-bold text-4xl pb-20">Proyectos</h3>
      <div className="">
        <div className="rounded-lg dark:shadow-lg shadow-xl dark:shadow-sky-400 shadow-gray-500 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center transition-transform duration-500 ease-in-out transform-gpu overflow-hidden">
            {projects.map(
              (project, index) =>
                project.imageUrl && (
                  <div
                    key={project.id}
                    className={`relative overflow-hidden rounded-lg ${
                      index === currentIndex
                        ? `block ${
                            direction === "right"
                              ? "animate-slide-right"
                              : "animate-slide-left"
                          }`
                        : "hidden"
                    }`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-[200px] md:h-[400px] object-cover"
                    />
                  </div>
                )
            )}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${
                  project.imageUrl ? "" : "col-span-2 md:py-24 py-16 md:px-20"
                } space-y-4 text-left ${
                  index === currentIndex
                    ? `block animate-${
                        direction === "right" ? "slide-right" : "slide-left"
                      }`
                    : "hidden"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground md:px-0 px-5">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base md:pr-32 md:px-0 px-5">
                  {project.description}
                </p>
                <div className=" md:px-0 px-5">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="md:absolute md:top-1/2 left-0 right-0 md:-translate-y-1/2 flex justify-between gap-4 px-4 md:py-0 py-8">
            <button
              onClick={handlePrevious}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
