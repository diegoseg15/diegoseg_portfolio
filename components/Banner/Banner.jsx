"use client";

import { Code, Palette, MicrophoneStage } from "@phosphor-icons/react";

export default function Banner() {
  return (
    <div
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[80dvh] lg:min-h-[100dvh] bg-background overflow-hidden"
    >
      {/* Fondo composicional únicamente en móvil: la imagen actúa como base de
           lectura y el texto se sitúa sobre una superposición tema-ajustada que
           garantiza el contraste sin ocultar la foto. En desktop/tablet se
           conserva el recurso 4:5 como elemento editorial independiente. */}
      <div
        className="absolute inset-0 z-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url("/images/banner-home.jpg")` }}
      />
      {/* Scrim del fondo de imagen solo en móvil.
           - Claro: fondo claro pero lo bastante translúcido para que la imagen
             se perciba como textura elegante de fondo, sin quedar apenas visible.
             El texto oscuro sobre el fondo claro conserva contraste AA.
           - Oscuro: scrim profundo que protege la legibilidad del texto claro sin
             degradar la composición inmersiva. */}
      <div
        className="
          absolute inset-0 z-10 md:hidden bg-gradient-to-b
          from-background/40 via-background/60 to-background/30
          dark:from-background/55 dark:via-background/80 dark:to-background/60
        "
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-20 py-16 lg:pt-24 lg:pb-24 relative z-20">
        {/* Hero editorial: una columna en móvil (secuencia de lectura clara) y
             grid asimétrico de dos columnas en desktop (contenido 7/12 izquierda,
             recurso visual 5/12 derecha). Todo el contenido es visible por
             defecto; no hay animación que oculte el titular ni los CTAs. */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            lg:gap-16
            min-h-[80dvh]
            lg:min-h-[100dvh]
            lg:items-center
          "
        >
          {/* Columna izquierda: etiqueta profesional, titular, descripción, CTAs.
               En móvil ocupa todo el ancho sobre el fondo de imagen. */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between lg:justify-start lg:pb-20">
            <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/10 px-3 py-1 mb-6 text-primary text-sm font-semibold tracking-wider uppercase"></div>

            <h1
              id="hero-heading"
              className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground mb-6 text-balance"
            >
              Full Stack <span className="text-primary">Developer.</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground mb-10 max-w-lg lg:max-w-none">
              Construyo soluciones web y móviles con enfoque en arquitectura,
              rendimiento y experiencia de usuario. Desarrollo proyectos desde
              la idea hasta el despliegue, con criterio de producto y diseño de
              interfaces aplicado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
              <a
                href="#projects"
                className="
                  inline-flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-full
                  bg-primary text-primary-foreground text-sm font-semibold
                  transition-colors duration-200 ease-out
                  hover:bg-primary/90 hover:-translate-y-0.5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                "
              >
                Ver proyectos
              </a>
              <a
                href="#about-me"
                className="
                  inline-flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-full
                  border border-border bg-card text-foreground text-sm font-semibold
                  transition-colors duration-200 ease-out
                  hover:bg-muted hover:-translate-y-0.5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                "
              >
                Sobre mí
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-start lg:justify-start text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Code size={14} weight="bold" />
                Programador
              </span>
              <span className="flex items-center gap-1.5">
                <Palette size={14} weight="bold" />
                UI/UX aplicado
              </span>
              <span className="flex items-center gap-1.5">
                <MicrophoneStage size={14} weight="bold" />
                Músico
              </span>
            </div>
          </div>

          {/* Columna derecha: recurso visual 4:5, elemento editorial independiente
               (solo desktop/tablet; oculto en móvil donde la imagen es fondo) */}
          <div className="hidden md:block col-span-1 lg:col-span-5 flex">
            <div className="relative w-full max-w-md aspect-[4/5] mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="/images/banner-home.jpg"
                alt="Recurso editorial del portafolio — Diego Segovia"
                className="w-full h-full object-cover block rounded-2xl border border-border/40"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
