"use client";

import { useEffect, useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { useRouter, usePathname } from "next/navigation";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        // 👉 Si NO es home, forzamos background
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const hero = document.getElementById("hero");
        if (!hero) {
            setScrolled(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0.01 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, [isHome]);


    const scrollToId = (id) => {
        if (!isHome) {
            // 👉 Navega al home con hash
            router.push(`/#${id}`);
            return;
        }

        const el = document.getElementById(id);
        if (!el) return;

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
            <div className="flex justify-between items-center lg:px-10 px-5 py-5">
                <h1 className="font-bold lg:text-2xl text-xl text-test">Diego Segovia</h1>

                <div className="flex space-x-6 items-center">
                    <nav className="flex space-x-6 lg:block hidden">
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
                            group md:flex items-center bg-white rounded-full
                            py-0.5 pl-5 text-black text-sm font-semibold
                            transition-all duration-300
                            hover:shadow-md hidden
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
                    <button
                        className="lg:hidden cursor-pointer z-50"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Abrir menú"
                    >
                        <List size={32} />
                    </button>

                    {mobileOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden h-screen"
                            onClick={() => setMobileOpen(false)}
                        />
                    )}


                    <div
                        className={`
                            fixed top-0 right-0 h-dvh w-3/4 max-w-sm
                            bg-sky-950 text-white z-50
                            transform transition-transform duration-300 ease-out
                            lg:hidden
                            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                    >
                        <button
                            className="absolute right-8 top-8 lg:hidden cursor-pointer z-50"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="cerrar menú"
                        >
                            <X size={26} />
                        </button>
                        <nav className="flex flex-col space-y-2 pt-28 px-6 text-lg">
                            <a
                                onClick={() => {
                                    scrollToId("hero");
                                    setMobileOpen(false);
                                }}
                                className="py-4 px-4 rounded-md hover:bg-white/10 transition"
                            >
                                Inicio
                            </a>

                            <a
                                onClick={() => {
                                    scrollToId("about-me");
                                    setMobileOpen(false);
                                }}
                                className="py-4 px-4 rounded-md hover:bg-white/10 transition"
                            >
                                Acerca de mí
                            </a>

                            <a
                                onClick={() => {
                                    scrollToId("skills");
                                    setMobileOpen(false);
                                }}
                                className="py-4 px-4 rounded-md hover:bg-white/10 transition"
                            >
                                Habilidades
                            </a>

                            <a
                                onClick={() => {
                                    scrollToId("projects");
                                    setMobileOpen(false);
                                }}
                                className="py-4 px-4 rounded-md hover:bg-white/10 transition"
                            >
                                Proyectos
                            </a>
                        </nav>
                        <a
                            className="
                            group flex items-center justify-between bg-white rounded-full
                            py-2 pl-5 text-black font-semibold
                            transition-all duration-300
                            hover:shadow-md md:hidden mx-10 my-10
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
                                <ArrowRight size={25} weight="bold" className="text-white" />
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
}
