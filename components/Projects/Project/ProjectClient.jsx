"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRepoReadme } from "@/lib/api/github";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { ArrowLeft, ArrowRight, GithubLogo } from "@phosphor-icons/react";

export default function ProjectClient({ slug, initialRepo }) {
  const [readme, setReadme] = useState(null);
  const [repo, setRepo] = useState(initialRepo ?? null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    (async () => {
      const data = await getRepoReadme(slug, { signal: controller.signal });
      window.clearTimeout(timeout);
      if (!active) return;
      if (data) {
        setReadme(data.readme);
        setRepo((current) => ({ ...current, ...data.repo }));
      }
      setLoading(false);
    })();
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [slug]);

  const href = repo?.html_url ?? null;
  const homepage = repo?.homepage ?? null;
  const topics = (repo?.topics ?? []).filter((topic) => topic !== "official");
  const hasImage = Boolean(repo?.readmeImage ?? initialRepo?.readmeImage);
  const projectImage = repo?.readmeImage ?? initialRepo?.readmeImage;

  if (!repo && loading) {
    return (
      <article className="lg:px-20 px-5 py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="h-80 rounded-xl bg-muted/50 dark:bg-muted/30 animate-pulse" />
            <h1 className="h-10 rounded-lg bg-muted/50 dark:bg-muted/30 animate-pulse mt-6" />
            <p className="h-6 w-3/4 rounded-lg bg-muted/50 dark:bg-muted/30 animate-pulse mt-4" />
          </div>
          <div className="lg:col-span-4">
            <div className="h-48 rounded-xl bg-muted/50 dark:bg-muted/30 animate-pulse" />
            <div className="h-6 w-full rounded-lg bg-muted/50 dark:bg-muted/30 animate-pulse mt-6" />
            <div className="h-4 w-3/4 rounded-lg bg-muted/50 dark:bg-muted/30 animate-pulse mt-3" />
          </div>
        </div>
      </article>
    );
  }

  if (!repo && !loading) {
    return (
      <article className="lg:px-20 px-5 py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                Este proyecto no tiene documentación disponible.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-sm text-muted-foreground">
                No hay metadatos para mostrar.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="lg:px-20 px-5 py-24 lg:py-32 max-w-7xl mx-auto">
      {/* Desktop: composición editorial ancha de dos columnas.
           Móvil/tablet: una sola columna, hero primero, luego README, metadatos al final. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

        {/* Columna principal: hero de proyecto, título, descripción, acciones, README */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Navegación de retorno */}
          <Link
            href="/#projects"
            className="
              inline-flex items-center gap-2
              text-xs font-semibold uppercase tracking-wider
              text-muted-foreground hover:text-foreground transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            "
            aria-label="Volver a proyectos"
          >
            <ArrowLeft size={14} weight="bold" />
            Volver a proyectos
          </Link>

          {/* Hero de proyecto: imagen/recurso existente bien visible */}
          <div className="relative group">
            {hasImage && projectImage ? (
              <img
                src={projectImage}
                alt={`Captura del proyecto ${repo.name}`}
                className="w-full h-auto rounded-2xl block object-cover"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            ) : (
              <div className="h-64 lg:h-80 rounded-2xl bg-muted/50 dark:bg-muted/30 p-12 flex flex-col justify-center items-center text-center border border-border/50">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Sin captura disponible
                </span>
                <span className="text-6xl font-black tracking-tight text-foreground/10">
                  {repo.name
                    .replace(/[^a-zA-Z0-9]+/g, " ")
                    .trim()
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Proyecto
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground text-balance">
              {repo.name}
            </h1>
            {repo.description && (
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
            )}
          </div>

          {topics.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="
                    px-3 py-1.5 rounded-md
                    bg-muted/50 dark:bg-muted/30
                    border border-border/50
                    text-[11px] font-medium uppercase tracking-wider
                    text-muted-foreground
                  "
                >
                  #{topic}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-4">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-7 py-3 rounded-full
                  bg-primary text-primary-foreground text-sm font-semibold
                  transition-colors duration-200 ease-out
                  hover:bg-primary/90 hover:-translate-y-0.5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                "
              >
                <GithubLogo size={18} />
                Ver repositorio en GitHub
                <ArrowRight size={16} weight="bold" />
              </a>
            )}
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-7 py-3 rounded-full
                  border border-border bg-card text-sm font-semibold text-foreground
                  transition-colors duration-200 ease-out
                  hover:bg-primary hover:text-primary-foreground hover:border-primary
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                "
              >
                Ver sitio
              </a>
            )}
          </div>

          {readme && (
            <section
              className="mt-16 border-t border-border/50 pt-16"
              aria-labelledby="documentacion"
            >
              <h2 id="documentacion" className="text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-foreground mb-8">
                Documentación
              </h2>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkGemoji]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-foreground mt-12 mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight leading-[1.25] text-foreground mt-10 mb-5">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl lg:text-2xl font-semibold leading-[1.3] text-foreground mt-8 mb-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => {
                    if (
                      Array.isArray(children) &&
                      children.some((child) => child?.type === "pre")
                    ) {
                      return <>{children}</>;
                    }
                    return (
                      <p className="text-base leading-relaxed text-muted-foreground mb-6">
                        {children}
                      </p>
                    );
                  },
                  code: ({ inline, children }) =>
                    inline ? (
                      <code className="bg-muted/50 dark:bg-muted/30 px-1.5 py-0.5 rounded text-primary text-sm font-mono">
                        {children}
                      </code>
                    ) : (
                      <pre className="bg-card border border-border rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono leading-relaxed">
                        <code>{children}</code>
                      </pre>
                    ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-3 border-primary pl-6 italic my-8 text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-3">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-3">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed text-muted-foreground">{children}</li>
                  ),
                  a: ({ href: linkHref, children }) => (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4 hover:text-primary/90 transition-colors duration-200"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="rounded-xl my-8 max-w-full h-auto"
                      loading="lazy"
                    />
                  ),
                }}
              >
                {readme || ""}
              </ReactMarkdown>
            </section>
          )}
        </div>

        {/* Columna secundaria: metadatos, tecnologías y enlaces (sticky en desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="sticky top-24">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-4">
                Sobre el proyecto
              </h3>
              {repo.description && (
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {repo.description}
                </p>
              )}
              {topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
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
              )}
              <div className="flex flex-col gap-3">
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      px-5 py-3 rounded-full
                      bg-primary text-primary-foreground text-sm font-semibold
                      transition-colors duration-200 ease-out
                      hover:bg-primary/90 hover:-translate-y-0.5
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                    "
                  >
                    <GithubLogo size={18} />
                    Ver repositorio
                  </a>
                )}
                {homepage && (
                  <a
                    href={homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      px-5 py-3 rounded-full
                      border border-border bg-card text-sm font-semibold text-foreground
                      transition-colors duration-200 ease-out
                      hover:bg-primary hover:text-primary-foreground hover:border-primary
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                    "
                  >
                    Ver sitio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
