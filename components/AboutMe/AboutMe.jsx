"use client";

import {
  GraduationCap,
  Lightning,
  Devices,
  Cloud,
  Cube,
  Brain,
  LinkedinLogo,
  GithubLogo
} from "@phosphor-icons/react";

export default function AboutMe() {
  return (
    <section id="about-me" className="px-20 py-24 grid md:grid-cols-2 gap-12 items-center">

      {/* Texto */}
      <div className="space-y-5">
        <h2 className="text-3xl font-bold leading-tight">
          Ingeniero en Sistemas
          <br />
          <span className="text-sky-600">con formación de máster internacional</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Ingeniero en Sistemas de Información con
          <strong className="mx-1">Máster en Tecnologías Web, Computación en la Nube y Aplicaciones Móviles</strong>
          por la Universidad de Valencia (España).
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          Diseño y desarrollo soluciones web y móviles escalables,
          priorizando rendimiento, mantenibilidad y experiencia de usuario.
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          Trabajo en todo el ciclo de desarrollo, desde la definición de la solución
          hasta su implementación, aportando criterio técnico y visión de producto.
        </p>

      </div>

    </section >
  );
}
