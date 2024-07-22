import { useState } from "react";

export function Carousel() {
  const projects = [
    {
      id: 1,
      title: "Web Santa Marianita V1",
      description:
        "Este repositorio contiene el código fuente de la página web del Hogar Santa Marianita, un centro de acogimiento temporal para niños vulnerados. Desarrollado en React y Tailwind, el sitio proporciona información sobre el hogar y permite realizar donaciones.",
      imageUrl:
        "https://github.com/diegoseg15/hogar-santa-marianita-diseno1/raw/main/src/assets/images/Captura-Presentaci%C3%B3n.png?raw=true",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of the second project.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of the third project.",
      imageUrl: "/placeholder.svg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <h3 className="text-center font-bold text-4xl pb-20">Proyectos</h3>
      <div className="px-20">
        <div className="rounded-lg shadow-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center transition-transform duration-500 ease-in-out transform-gpu">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative overflow-hidden rounded-lg ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-[400px] md:h-[400px] object-cover"
                />
              </div>
            ))}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`space-y-4 text-left ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {project.title}
                </h3>
                {/* <div>
                  <h4 className="text-lg font-medium">{project.title}</h4>
                </div> */}
                <p className="text-muted-foreground text-sm md:text-base pr-32">
                  {project.description}
                </p>
                <div>
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
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between gap-4 px-4">
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

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
