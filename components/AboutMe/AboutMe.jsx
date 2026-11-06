"use client";

import {
  GraduationCap,
  Lightning,
  Devices,
  Cloud,
  Cube,
  Brain,
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { Highlight } from "./Highlight";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      tabIndex={-1}
      className="max-w-7xl mx-auto lg:px-20 px-5 py-16 lg:py-24 min-h-dvh grid lg:grid-cols-2 gap-12 items-center"
    >
      {/* Texto */}
      <div className="space-y-6">
        <h2
          className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-2"
        >
          Ingeniero de software
        </h2>
        <p className="text-lg text-primary font-medium tracking-tight">
          con formación de máster internacional y criterio de producto
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          Ingeniero en Sistemas de Información con Máster en Tecnologías Web,
          Computación en la Nube y Aplicaciones Móviles por la Universidad de
          Valencia (España).
        </p>

        <p className="text-base leading-relaxed text-muted-foreground mt-4">
          Diseño y desarrollo soluciones web y móviles escalables,
          priorizando rendimiento, mantenibilidad y experiencia de usuario.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground mt-4">
          Trabajo en todo el ciclo de desarrollo, desde la definición de la
          solución hasta su implementación, aportando criterio técnico y visión
          de producto.
        </p>

        {/* Contacto */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://linkedin.com/in/diegoseg15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              group relative flex items-center gap-2.5 px-4 py-2 rounded-lg
              border border-border bg-card text-sm font-medium text-foreground
              transition-colors duration-200 ease-out
              hover:border-primary hover:text-primary
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            "
          >
            <LinkedinLogo size={20} className="relative z-10" />
            <span className="relative z-10">LinkedIn</span>
          </a>

          <a
            href="https://github.com/diegoseg15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              group relative flex items-center gap-2.5 px-4 py-2 rounded-lg
              border border-border bg-card text-sm font-medium text-foreground
              transition-colors duration-200 ease-out
              hover:border-primary hover:text-primary
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            "
          >
            <GithubLogo size={20} className="relative z-10" />
            <span className="relative z-10">GitHub</span>
          </a>

          <a
            href="mailto:diegofersv15@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Correo electrónico"
            className="
              group relative flex items-center gap-2.5 px-4 py-2 rounded-lg
              border border-border bg-card text-sm font-medium text-foreground
              transition-colors duration-200 ease-out
              hover:border-primary hover:text-primary
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            "
          >
            <EnvelopeSimple size={20} className="relative z-10" />
            <span className="relative z-10">Correo</span>
          </a>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-4">
        <Highlight icon={<GraduationCap size={22} />} text="Máster en España" />
        <Highlight icon={<Lightning size={22} />} text="+5 años de experiencia" />
        <Highlight icon={<Devices size={22} />} text="Web & Mobile Apps" />
        <Highlight icon={<Cloud size={22} />} text="Cloud & Arquitectura" />
        <Highlight icon={<Cube size={22} />} text="Arquitectura & Producto" />
        <Highlight icon={<Brain size={22} />} text="IA aplicada al software" />
      </div>
    </section>
  );
}
