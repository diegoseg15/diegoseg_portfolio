"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

function getProjectHref(project) {
  return project.backupproject
    ? `https://github.com/diegoseg15/${project.name}`
    : `/proyecto/${project.name}`;
}

function getInitials(name = "") {
  return name
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

function ProjectMedia({ project, index }) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(project.readmeImage) && !hasError;

  if (!showImage) {
    return (
      <div className="flex h-[var(--project-card-h)] w-[calc(var(--project-card-h)*0.9)] flex-col justify-between bg-gradient-to-br from-sky-950 via-sky-900 to-slate-800 p-5 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200/80">
          Sin captura
        </span>
        <span className="text-5xl font-black tracking-tight text-white/90">
          {getInitials(project.name)}
        </span>
        <span className="line-clamp-2 text-sm font-semibold leading-snug text-white/85">
          {project.name}
        </span>
      </div>
    );
  }

  return (
    // Native image keeps the original aspect ratio while the shared CSS height fixes the card height.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.readmeImage}
      alt={`Captura del proyecto ${project.name}`}
      className="block h-[var(--project-card-h)] w-auto max-w-none object-contain"
      loading="eager"
      fetchPriority={index < 2 ? "high" : "auto"}
      decoding="async"
      draggable={false}
      onError={() => setHasError(true)}
    />
  );
}

export default function Projects() {
  const [projectsState, setProjectsState] = useState({
    data: [],
    isLoading: true,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let projects = [];

    try {
      const cached = JSON.parse(
        localStorage.getItem("projects_cache") || "null",
      );
      projects = Array.isArray(cached?.data) ? cached.data : [];
    } catch {
      projects = [];
    }

    // The cache is only readable after hydration, so it must be read from an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProjectsState({ data: projects, isLoading: false });
  }, []);

  const dataProjects = projectsState.data;
  const isLoading = projectsState.isLoading;
  const total = dataProjects.length;
  const safeActiveIndex = total === 0 ? 0 : Math.min(activeIndex, total - 1);
  const activeProject = dataProjects[safeActiveIndex] ?? null;

  const goTo = useCallback(
    (index, { focus = false } = {}) => {
      if (total === 0) return;

      const nextIndex = Math.max(0, Math.min(index, total - 1));
      const gallery = galleryRef.current;
      const card = cardRefs.current[nextIndex];

      setActiveIndex(nextIndex);

      if (focus && card) {
        // The focus handler centers the card and keeps keyboard navigation in sync.
        card.focus({ preventScroll: true });
        return;
      }

      if (!gallery || !card) return;

      const containerRect = gallery.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset =
        cardRect.left +
        cardRect.width / 2 -
        (containerRect.left + containerRect.width / 2);

      gallery.scrollTo({
        left: gallery.scrollLeft + offset,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    },
    [total],
  );

  // Track the project closest to the center of the viewport.
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || total === 0) return;

    let frame;

    const updateActive = () => {
      frame = undefined;
      const containerRect = gallery.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        if (rect.width === 0) return;

        const distance = Math.abs(rect.left + rect.width / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex,
      );
    };

    const scheduleUpdate = () => {
      if (frame !== undefined) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    gallery.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      gallery.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, [total]);

  // Turn vertical wheel input over the gallery into horizontal navigation.
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || total === 0) return;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      if (maxScroll <= 0) return;

      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (dominantDelta === 0) return;

      const atStart = gallery.scrollLeft <= 0;
      const atEnd = gallery.scrollLeft >= maxScroll - 1;

      // Let the page keep scrolling when the gallery cannot move any further.
      if ((dominantDelta < 0 && atStart) || (dominantDelta > 0 && atEnd)) {
        return;
      }

      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? gallery.clientWidth
            : 1;

      event.preventDefault();
      // Snap can undo each small wheel delta before the next event arrives.
      // Keep wheel movement continuous; pointer input restores native snapping.
      gallery.style.scrollSnapType = "none";
      gallery.scrollLeft += dominantDelta * unit;
    };

    const restoreScrollSnap = () => {
      gallery.style.removeProperty("scroll-snap-type");
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    gallery.addEventListener("pointerdown", restoreScrollSnap, { passive: true });

    return () => {
      gallery.removeEventListener("wheel", handleWheel);
      gallery.removeEventListener("pointerdown", restoreScrollSnap);
      restoreScrollSnap();
    };
  }, [total]);

  const handleCardFocus = (index) => {
    setActiveIndex(index);
    const card = cardRefs.current[index];
    if (!card) return;

    card.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (total === 0) return;

    const current = Math.min(safeActiveIndex, total - 1);

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(current + 1, { focus: true });
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(current - 1, { focus: true });
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0, { focus: true });
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1, { focus: true });
    }
  };

  const topics = (activeProject?.topics ?? [])
    .filter((topic) => topic !== "official")
    .slice(0, 5);

  return (
    <section
      id="projects"
      className="project-gallery-scope relative flex min-h-dvh w-full scroll-mt-[5.5rem] flex-col justify-center py-16 lg:py-24"
    >
      <div className="flex flex-col justify-between gap-6 px-5 md:flex-row md:items-end lg:px-20">
        <div>
          <h3 className="mt-2 text-4xl font-bold text-black dark:text-gray-50">
            Proyectos
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            Desliza, usa la rueda o las flechas para recorrer la galería.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 sm:inline">
            {total > 0 ? `${String(total).padStart(2, "0")} proyectos` : ""}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(safeActiveIndex - 1)}
              disabled={isLoading || total === 0 || safeActiveIndex <= 0}
              aria-label="Proyecto anterior"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/15 text-neutral-800 transition-colors duration-300 hover:border-sky-700 hover:bg-sky-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/15 disabled:hover:bg-transparent disabled:hover:text-neutral-800 dark:border-white/20 dark:text-neutral-100 dark:hover:border-sky-500 dark:hover:bg-sky-600 dark:disabled:hover:border-white/20 dark:disabled:hover:bg-transparent dark:disabled:hover:text-neutral-100"
            >
              <ArrowLeft size={18} weight="bold" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => goTo(safeActiveIndex + 1)}
              disabled={
                isLoading || total === 0 || safeActiveIndex >= total - 1
              }
              aria-label="Proyecto siguiente"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/15 text-neutral-800 transition-colors duration-300 hover:border-sky-700 hover:bg-sky-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/15 disabled:hover:bg-transparent disabled:hover:text-neutral-800 dark:border-white/20 dark:text-neutral-100 dark:hover:border-sky-500 dark:hover:bg-sky-600 dark:disabled:hover:border-white/20 dark:disabled:hover:bg-transparent dark:disabled:hover:text-neutral-100"
            >
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div
          className="mt-8 grid grid-cols-1 gap-10 px-5 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-center lg:px-20 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-14"
          aria-hidden="true"
        >
          <div className="hidden min-w-0 flex-col gap-4 lg:flex">
            <div className="h-3 w-24 animate-pulse rounded-sm bg-black/5 dark:bg-white/10" />
            <div className="h-8 w-3/4 animate-pulse rounded-sm bg-black/5 dark:bg-white/10" />
            <div className="h-4 w-full animate-pulse rounded-sm bg-black/5 dark:bg-white/10" />
            <div className="h-4 w-5/6 animate-pulse rounded-sm bg-black/5 dark:bg-white/10" />
            <div className="mt-2 h-10 w-36 animate-pulse rounded-sm bg-black/5 dark:bg-white/10" />
          </div>
          <div className="flex gap-5 overflow-hidden py-4 lg:gap-7">
            <div className="h-[var(--project-card-h)] w-[28rem] shrink-0 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
            <div className="h-[var(--project-card-h)] w-[16rem] shrink-0 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
            <div className="h-[var(--project-card-h)] w-[12rem] shrink-0 animate-pulse rounded-2xl bg-black/5 dark:bg-white/10" />
          </div>
        </div>
      ) : total === 0 ? (
        <p className="mt-8 px-5 text-sm text-neutral-600 dark:text-neutral-300 lg:px-20">
          No hay proyectos disponibles en este momento.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 px-5 lg:mt-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-20 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-14">
          {activeProject && (
            <div className="order-2 min-w-0 lg:order-1">
              <div
                key={activeProject.slug || activeProject.name}
                className="project-detail-enter border-t border-black/10 pt-6 dark:border-white/15 lg:border-t-0 lg:pt-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-px w-8 shrink-0 bg-black/10 dark:bg-white/15"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-3 break-words text-2xl font-bold text-black dark:text-gray-50 lg:text-3xl">
                  {activeProject.name}
                </h4>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-base">
                  {activeProject.description}
                </p>

                {topics.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-sm bg-sky-950/5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-sky-900 dark:bg-sky-400/10 dark:text-sky-200"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-7">
                  <a
                    href={getProjectHref(activeProject)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-sky-800 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    {activeProject.backupproject
                      ? "Abrir en Github"
                      : "Ver proyecto"}
                    <ArrowRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="order-1 min-w-0 lg:order-2">
            <div
              ref={galleryRef}
              role="region"
              aria-roledescription="carrusel"
              aria-label="Galería de proyectos"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="project-gallery w-full overflow-x-auto overflow-y-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-600/70"
            >
              <ul className="flex items-center gap-5 px-1 py-4 lg:gap-7">
                {dataProjects.map((project, index) => {
                  const isActive = index === safeActiveIndex;
                  const href = getProjectHref(project);

                  return (
                    <li
                      key={project.slug || project.name || index}
                      className="shrink-0 snap-center"
                    >
                      <a
                        ref={(element) => {
                          cardRefs.current[index] = element;
                        }}
                        href={href}
                        aria-label={`Ver proyecto ${project.name}`}
                        aria-current={isActive ? "true" : undefined}
                        onFocus={() => handleCardFocus(index)}
                        className={`group/card relative block rounded-2xl transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] ${
                          isActive
                            ? "opacity-100"
                            : "opacity-55 hover:opacity-85"
                        }`}
                      >
                        <div
                          className={`overflow-hidden rounded-2xl bg-neutral-100 ring-1 transition-[box-shadow,border-color] duration-500 dark:bg-neutral-900 ${
                            isActive
                              ? "shadow-2xl shadow-sky-950/25 ring-2 ring-sky-500"
                              : "ring-black/10 dark:ring-white/15"
                          }`}
                        >
                          <ProjectMedia project={project} index={index} />
                        </div>

                        <span
                          aria-hidden="true"
                          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] backdrop-blur-sm transition-colors duration-300 ${
                            isActive
                              ? "bg-sky-600 text-white"
                              : "bg-black/55 text-white/85"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="sr-only" aria-live="polite">
              {`Proyecto ${safeActiveIndex + 1} de ${total}: ${activeProject?.name ?? ""}`}
            </p>

            <div className="mt-3 flex items-center gap-4">
              <div
                className="relative h-px flex-1 overflow-hidden bg-black/10 dark:bg-white/15"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-sky-600 transition-[width] duration-500 dark:bg-sky-400"
                  style={{
                    width: `${((safeActiveIndex + 1) / total) * 100}%`,
                  }}
                />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 tabular-nums dark:text-neutral-400">
                {String(safeActiveIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
