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
                fixed top-0 left-0 w-full z-50
                transition-all duration-300 ease-out
                ${scrolled
                    ? "bg-[#001a31]/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-5"}
            `}
        >
            <div className="flex justify-between items-center px-10 py-5">
                <h1 className="font-bold text-2xl">Diego Segovia</h1>

                <div className="flex space-x-6 items-center">
                    <nav className="flex space-x-6">
                        <a
                            onClick={() => scrollToId("hero")}
                            className="
                                relative cursor-pointer
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[2px] after:w-0 after:bg-sky-400
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            Inicio
                        </a>
                        <a
                            onClick={() => scrollToId("about-me")}
                            className="
                                relative cursor-pointer
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[2px] after:w-0 after:bg-sky-400
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            Acerca de mí
                        </a>
                        <a
                            onClick={() => scrollToId("skills")}
                            className="
                                relative cursor-pointer
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[2px] after:w-0 after:bg-sky-400
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            Habilidades
                        </a>
                        <a
                            onClick={() => scrollToId("projects")}
                            className="
                                relative cursor-pointer
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[2px] after:w-0 after:bg-sky-400
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            Proyectos
                        </a>
                    </nav>


                    <a
                        className="
                            group flex items-center bg-white rounded-full
                            py-0.5 pl-5 text-black text-sm font-semibold
                            transition-all duration-300
                            hover:shadow-md
                        "
                        href="https://www.canva.com/design/DAF0MG858UU/N2ruW9la0Hq4oP8WwfQdRA/edit?utm_content=DAF0MG858UU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                    >
                        Descargar CV
                        <span
                            className="
                                flex p-2 rounded-full bg-sky-700 ml-2.5 mr-1
                                transition-transform duration-300
                                group-hover:translate-x-0.5
                            "
                        >
                            <ArrowRight size={18} weight="bold" className="text-white" />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
