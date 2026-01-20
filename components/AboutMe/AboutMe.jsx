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
    EnvelopeSimple
} from "@phosphor-icons/react";
import { Highlight } from "./Highlight";

export default function AboutMe() {
    return (
        <section id="about-me" className="lg:px-20 px-5 grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div className="space-y-5">
                <h2 className="text-3xl font-bold leading-tight pb-5">
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
                    <a
                        href="https://linkedin.com/in/diegoseg15"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                            group relative overflow-hidden
                            flex items-center gap-2 px-3 py-1.5 rounded-md
                            text-gray-600 dark:text-gray-300
                            transition-colors duration-300
                            hover:text-sky-400
                        "
                    >
                        <LinkedinLogo size={22} className="relative z-10" />
                        <span className="relative z-10 text-sm">LinkedIn</span>

                        <AnimateBackground />
                    </a>


                    <a
                        href="https://github.com/diegoseg15"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            group relative overflow-hidden
                            flex items-center gap-2 px-3 py-1.5 rounded-md
                            text-gray-600 dark:text-gray-300
                            transition-colors duration-300
                            hover:text-sky-400
                        "
                    >
                        <GithubLogo size={22} className="relative z-10" />
                        <span className="relative z-10 text-sm">GitHub</span>

                        <AnimateBackground />
                    </a>

                    <a
                        href="mailto:diegofersv15@hotmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            group relative overflow-hidden
                            flex items-center gap-2 px-3 py-1.5 rounded-md
                            text-gray-600 dark:text-gray-300
                            transition-colors duration-300
                            hover:text-sky-400
                        "
                    >
                        <EnvelopeSimple size={22} className="relative z-10" />
                        <span className="relative z-10 text-sm">Correo</span>

                        <AnimateBackground />
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

const AnimateBackground = () => {
    return (
        <span
            className="
                absolute inset-0
                bg-sky-700/10
                -translate-x-full
                transition-transform duration-300 ease-out
                group-hover:translate-x-0
            "
        />
    )
}