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
import { Highlight } from "./Highlight";

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

                {/* Contacto */}
                <div className="flex items-center gap-4 pt-2">
                    <a href="https://linkedin.com/in/diegoseg15" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 transition" >
                        <LinkedinLogo size={22} />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                    <a href="https://github.com/diegoseg15" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 transition" >
                        <GithubLogo size={22} />
                        <span className="text-sm">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 text-sm">
                <Highlight icon={<GraduationCap size={22} />} text="Máster en España" />
                <Highlight icon={<Lightning size={22} />} text="+3 años de experiencia" />
                <Highlight icon={<Devices size={22} />} text="Web & Mobile Apps" />
                <Highlight icon={<Cloud size={22} />} text="Cloud & Arquitectura" />
                <Highlight icon={<Cube size={22} />} text="Arquitectura & Producto" />
                <Highlight icon={<Brain size={22} />} text="IA aplicada al software" />
            </div>

        </section >
    );
}
