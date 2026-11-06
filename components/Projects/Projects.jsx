"use client";

import { ArrowRight } from "@phosphor-icons/react";

function getProjectHref(project) {
  return project.backupproject
    ? `https://github.com/diegoseg15/${project.name}`
    : `/proyecto/${project.name}`;
}

function shouldOpenExternal(project) {
  return Boolean(project.backupproject || project.homePage);
}

function ProjectMedia({ project, index }) {
  const showImage = Boolean(project.readmeImage);

  if (!showImage) {
    return (
      <div className="h-full w-full rounded-xl bg-gradient-to-br from-muted/50 dark:from-muted/30 via-muted/30 dark:via-muted/10 to-transparent p-8 flex flex-col justify-center items-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Sin captura disponible
        </span>
        <span className="text-5xl font-black tracking-tight text-foreground/10">
          {project.name
            .replace(/[^a-zA-Z0-9]+/g, " ")
            .trim()
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </span>
        <span className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          {project.name}
        </span>
      </div>
    );
  }

  return (
    <img
      src={project.readmeImage}
      alt={`Captura del proyecto ${project.name}`}
      className="block h-full w-full object-cover rounded-xl"
      loading={index < 2 ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}

function ProjectCard({ project, index }) {
  const href = getProjectHref(project);
  const external = shouldOpenExternal(project);
  const topics = (project.topics ?? [])
    .filter((topic) => topic !== "official")
    .slice(0, 6);

  return (
    <article
      className={`
        group flex flex-col h-full rounded-xl border border-border bg-card
        transition-colors duration-200 ease-out
        hover:border-primary hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.35)]
        dark:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]
      `}
    >
      {/* Zona de imagen: misma altura en todas las tarjetas para que el
          encabezado quede alineado horizontalmente. No se fija altura sobre el
          texto, que fluye con line-clamp. */}
      <div className="relative h-48 lg:h-64 overflow-hidden rounded-t-xl">
        <ProjectMedia project={project} index={index} />
      </div>

      <div className="p-5 lg:p-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="
                px-2.5 py-1 rounded-md
                bg-muted/50 dark:bg-muted/30
                border border-border/50
                text-[10px] font-medium uppercase tracking-wider
                text-muted-foreground
              "
            >
              #{topic}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Acción anclada al fondo del bloque de texto y de la tarjeta. */}
      <div className="mt-auto p-5 lg:p-6">
        <a
          href={href}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
          className="
            inline-flex items-center justify-center gap-2
            w-full lg:w-auto
            px-5 py-2.5 rounded-full
            bg-primary text-primary-foreground text-xs font-semibold
            transition-colors duration-200 ease-out
            hover:bg-primary/90 hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          "
        >
          {external ? "Abrir en GitHub" : "Ver proyecto"}
          <ArrowRight size={14} weight="bold" />
        </a>
      </div>
    </article>
  );
}

export default function Projects({ projects = [] }) {
  const dataProjects = projects;
  const total = dataProjects.length;

  if (total === 0) {
    return (
      <section id="projects" className="lg:px-20 px-5 py-16 lg:py-24 scroll-mt-[calc(var(--header-height)+var(--section-offset))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            Proyectos
          </h2>
          <p className="text-muted-foreground">
            No hay proyectos disponibles en este momento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 scroll-mt-[calc(var(--header-height)+var(--section-offset))]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-3">
              Proyectos
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Trabajo real, código público y casos privados documentados.
              Cada proyecto enlaza a su evidencia: repositorio, README o
              sitio en vivo.
            </p>
          </div>

        </div>

        {/* Galería editorial: pieza destacada primero, luego el resto en grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            lg:gap-6
          "
        >
          {dataProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
