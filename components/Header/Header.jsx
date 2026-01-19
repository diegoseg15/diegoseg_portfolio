"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                setScrolled(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.01,
            }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    const scrollToId = (id) => {
        const root = document.getElementById("scroll-root");
        const el = document.getElementById(id);
        if (!root || !el) return;

        // OJO: esto hace scroll dentro del contenedor correcto
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };



    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white
        ${scrolled ? "bg-[#001a31] backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
        >
            <div className="flex justify-between items-center px-10 py-5">
                <h1 className="font-bold text-2xl">Diego Segovia</h1>

                <div className="flex space-x-6 items-center">
                    <nav className="flex space-x-6">
                        <a onClick={() => scrollToId("hero")} className="cursor-pointer hover:text-sky-400">Inicio</a>
                        <a onClick={() => scrollToId("about-me")} className="cursor-pointer hover:text-sky-400">Acerca de mí</a>
                        <a onClick={() => scrollToId("skills")} className="cursor-pointer hover:text-sky-400">Habilidades</a>
                        <a onClick={() => scrollToId("projects")} className="cursor-pointer hover:text-sky-400">Proyectos</a>
                    </nav>


                    <a
                        className="flex items-center bg-white rounded-full py-0.5 pl-5 text-black text-sm font-semibold cursor-pointer" href="/"
                        target="_blank"
                    >
                        Descargar CV
                        <span className="flex p-2 rounded-full bg-sky-700 ml-2.5 mr-1">
                            <ArrowRight size={18} weight="bold" className="text-white" />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
